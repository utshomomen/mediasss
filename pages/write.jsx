import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../requestMethods";
import { FileUploader } from "react-drag-drop-files";
import { SvgDelete } from "../components/svgs/SvgDelete";
import Spinner from "../components/Spinner";
import cx from "classnames";
import { average } from "color.js";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const Write = () => {
  const placeholder = "Write description...";
  const { quill, quillRef } = useQuill({ placeholder });
  const [publicId, setPublicId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Insert Image(selected by user) to quill
  const insertToEditor = (url) => {
    const range = quill.getSelection();
    quill.insertEmbed(range?.index, "image", url);
  };

  // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
  const saveToServer = async (file) => {
    setIsLoading(true);
    document.body.classList.add("noscroll");
    const body = new FormData();
    body.append("file", file);
    body.append("upload_preset", "folder_posts");
    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dntchqbzx/image/upload",
      body
    );
    insertToEditor(uploadRes.data.secure_url);
    setPublicId((prev) => prev.concat(uploadRes.data.public_id));
    setIsLoading(false);
    document.body.classList.remove("noscroll");
  };

  // Open Dialog to select Image File
  const selectLocalImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      saveToServer(file);
    };
  };
  // end Insert Image(selected by user) to quill

  useEffect(() => {
    if (quill) {
      // Add custom handler for Image Upload
      quill.getModule("toolbar").addHandler("image", selectLocalImage);

      quill.clipboard.dangerouslyPasteHTML(desc);
      quill.on("text-change", (delta, oldDelta, source) => {
        // console.log(quillRef.current.firstChild.innerHTML);
        setDesc(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  const { currentUser } = useSelector((state) => state.user);
  const router = useRouter();
  if (!currentUser) {
    router.push("/login");
  }
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  // cats lấy từ mongodb cho select option
  const [cats, setCats] = useState([]);
  const [desc, setDesc] = useState("");
  const [files, setFiles] = useState([]);
  const [thumbs, setThumbs] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileTypes = ["JPG", "JPEG", "PNG", "GIF", "jfif"];
  const [progress, setProgress] = useState(0);

  // blob images selected
  const handleFiles = (e) => {
    setFiles([...files, ...e]);
    const blob = [...e].map((file) => URL.createObjectURL(file));
    setThumbs([...thumbs, ...blob]);
  };

  // delete selected image
  const handleDeleteSelectedImage = (index) => {
    setFiles(files.filter((_, i) => i !== index));
    setThumbs(thumbs.filter((_, i) => i !== index));
    URL.revokeObjectURL(thumbs[index]);
  };

  useEffect(() => {
    const controller = new AbortController(); // for cleanup
    const signal = controller.signal; // for cleanup
    const getCats = async () => {
      try {
        const res = await publicRequest.get("/categories/", {
          signal,
        });
        setCats(res.data);
      } catch (err) {
        // console.log(err);
      }
    };
    getCats();
    return () => controller.abort();
  }, []);

  const handleSubmit = async (e) => {
    setIsUploading(true);
    e.preventDefault();
    const newPost = {
      username: currentUser.username,
      title,
      desc,
      categories,
      public_id: publicId,
    };

    if (files) {
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percentage = Math.round(
            ((loaded / 1000) * 100) / (total / 1000)
          );
          setProgress(percentage);
        },
      };
      try {
        const list = await Promise.all(
          Object.values(files).map(async (file) => {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "folder_posts");
            const uploadRes = await axios.post(
              "https://api.cloudinary.com/v1_1/dntchqbzx/image/upload",
              data,
              options
            );
            const { secure_url, public_id } = uploadRes.data;
            // newPost.photo = secure_url;
            const color = await average(secure_url, { format: "hex" }).then(
              (color) => {
                return color;
              }
            );
            return {
              src: secure_url,
              public_id: public_id,
              color: color,
            };
          })
        );
        // console.log(list);
        try {
          newPost.photos = list;
          const res = await userRequest.post("/posts", newPost, options);
          setIsUploading(false);
          thumbs.map((thumb) => URL.revokeObjectURL(thumb));
          router.push(`/post/${res.data.slug}`);
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Write articles |</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="write">
        <div className="write__wrapper">
          <form className="write__form" onSubmit={handleSubmit}>
            <div className="write__formGroup" style={{ marginBottom: "16px" }}>
              <input
                type="text"
                className="write__input bg-transparent dark:border-b-slate-600"
                placeholder="Title"
                autoFocus={true}
                onChange={(e) => setTitle(e.target.value)}
              />
              <select
                className="bg-transparent dark:text-slate-200"
                onChange={(e) => {
                  setCategories([e.target.value]);
                  setCategory([e.target.value]);
                }}
              >
                <option style={{ display: "none" }}>Choose a genre</option>
                {cats.map((item) => (
                  <option key={item._id} value={item.cat}>
                    {item.name}
                  </option>
                ))}
              </select>

              {category[0] === "economy" && (
                <select
                  className="bg-transparent dark:text-slate-200"
                  onChange={(e) => setCategories([...category, e.target.value])}
                >
                  <option style={{ display: "none" }}>Sub-category</option>
                  <option value="innovation">Innovation</option>
                  <option value="tourism">Tourism</option>
                </select>
              )}

              {category[0] === "society" && (
                <select
                  className="bg-transparent dark:text-slate-200"
                  onChange={(e) => setCategories([...category, e.target.value])}
                >
                  <option style={{ display: "none" }}>Sub-category</option>
                  <option value="civil-protection">Citizen Protection</option>
                  <option value="education">Education</option>
                  <option value="housing">House</option>
                  <option value="urban-planning">Urban planning</option>
                </select>
              )}
            </div>
            <div className="write__formGroup">
              <div className="write__formWrapper">
                <div className="write__imageWrapper">
                  {thumbs &&
                    thumbs.map((thumb, index) => (
                      <figure key={index} className="write__thumb">
                        <Image
                          src={thumb}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          alt=""
                        />
                        <span
                          className="write__iconDelete"
                          onClick={() => handleDeleteSelectedImage(index)}
                        >
                          <SvgDelete color="#ffffff" />
                        </span>
                      </figure>
                    ))}
                </div>
                <FileUploader
                  id="fileInput"
                  classes="drop_area"
                  type="file"
                  label="Drop the File here"
                  name="file"
                  multiple
                  hoverTitle="Drop here"
                  types={fileTypes}
                  handleChange={(e) => handleFiles(e)}
                />
              </div>
            </div>

            <div className="write__formGroup mt-4">
              {isLoading && (
                <div className="overplay">
                  <span>Uploading images...</span>
                </div>
              )}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div ref={quillRef} />
              </div>
            </div>

            {isUploading && (
              <div className="write__progress">
                <label htmlFor="file">Uploading images: </label>
                <progress id="file" value={progress} max="100"></progress>
                <span> {progress}% </span>
              </div>
            )}
            <button
              className={cx("write__submit", { disabled: isUploading })}
              type="submit"
            >
              {isUploading ? <Spinner /> : "Write"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Write;
