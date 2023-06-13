import Link from "next/link";
import React from "react";

const TagCard = ({ cat, post }) => {
  return (
    <>
      {cat !== undefined ? (
        <div></div>
      ) : (
        <div className="z-40">
          {/* Specify the path if there is a subCategory, use css to hide an item 1 item c */}
          {post.categories.map((c, index) => {
            let cat;
            if (c === "innovation" || c === "tourism") {
              cat = "economy";
            } else if (
              c === "civil-protection" ||
              c === "education" ||
              c === "housing" ||
              c === "urban-planning"
            ) {
              cat = "society";
            } else {
              cat = null;
            }
            if (cat) {
              return (
                <Link
                  key={index}
                  href={`/articles/category/${cat}/${c}`}
                  className="inline-flex h-[22px] items-center rounded-sm bg-blue-900 py-[3px] px-2 uppercase text-white shadow-sm shadow-black/10 transition-colors duration-200 ease-linear hover:bg-blue-600 [&:nth-last-child(2)]:hidden"
                >
                  <span className="pt-[2px] text-[13px] font-bold">
                    {[
                      c === "economy"
                        ? "economy"
                        : c === "innovation"
                        ? "innovation"
                        : c === "tourism"
                        ? "tourism"
                        : c === "culture"
                        ? "culture"
                        : c === "politics"
                        ? "politics"
                        : c === "society"
                        ? "society"
                        : c === "civil-protection"
                        ? "civil-protection"
                        : c === "education"
                        ? "education"
                        : c === "housing"
                        ? "housing"
                        : c === "urban-planning"
                        ? "urban-planning"
                        : c === "mobility"
                        ? "mobility"
                        : c === "environment"
                        ? "environment"
                        : c === "sports"
                        ? "sports"
                        : null,
                    ]}
                  </span>
                </Link>
              );
            } else {
              return (
                <Link
                  key={index}
                  href={`/articles/category/${c}`}
                  className="inline-flex h-[22px] items-center rounded-sm bg-blue-900 py-[3px] px-2 uppercase text-white shadow-sm shadow-black/10 transition-colors duration-200 ease-linear hover:bg-blue-600 [&:nth-last-child(2)]:hidden"
                >
                  <span className="pt-[2px] text-[13px] font-bold">
                    {[
                      c === "economy"
                        ? "Economy"
                        : c === "culture"
                        ? "Culture"
                        : c === "politics"
                        ? "Politics"
                        : c === "society"
                        ? "Society"
                        : c === "mobility"
                        ? "Mobility"
                        : c === "environment"
                        ? "Environment"
                        : c === "sports"
                        ? "Sports"
                        : null,
                    ]}
                  </span>
                </Link>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default TagCard;
