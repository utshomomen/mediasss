import React from "react";
import Link from "next/link";
import useSWR from "swr";
import MostReadSkeleton from "./MostReadSkeleton";
import { domainApi } from "../requestMethods";
import { dayjsFormat } from "../utils/dayjsFormat";

const MostRead = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`${domainApi}/posts/`, fetcher);
  if (error) return <div>Failed to load</div>;
  const posts = data?.posts;

  return (
    <>
      {posts ? (
        <div className="px-[15px]">
          <h3 className="relative pb-[14px] text-2xl font-bold leading-7 text-slate-900 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-blue-900 dark:text-slate-200 dark:after:bg-blue-600 lg:text-[34px] lg:leading-[42px]">
            <span>Most Read</span>
          </h3>
          <ul>
            {posts?.slice(6, 10).map((post) => (
              <li
                className="border-b border-slate-300 pt-[15px] pb-[14px] last:border-none dark:border-slate-600"
                key={post._id}
              >
                <div>
                  {/* Specify the path if there is a subCategory, Use css to hide an item */}
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
                          className="inline-flex items-center uppercase tracking-[0.1px] text-blue-900 transition-opacity duration-200 ease-in hover:opacity-60 dark:text-blue-400 [&:nth-last-child(2)]:hidden"
                        >
                          <span className="pt-[3px] text-sm font-bold leading-none">
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
                                 : "",
                             
                            ]}
                          </span>
                        </Link>
                      );
                    } else {
                      return (
                        <Link
                          key={index}
                          href={`/articles/category/${c}`}
                          className="inline-flex items-center uppercase tracking-[0.1px] text-blue-900 transition-opacity duration-200 ease-in hover:opacity-60 dark:text-blue-400 [&:nth-last-child(2)]:hidden"
                        >
                          <span className="pt-[3px] text-sm font-bold leading-none">
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
                              : "",
                            ]}
                          </span>
                        </Link>
                      );
                    }
                  })}
                </div>
                <Link href={`/post/${post.slug}`}>
                  <h3 className="mb-[5px] text-base font-bold leading-[22px] text-slate-900 transition-colors duration-200 ease-linear hover:text-blue-900 dark:text-slate-200 dark:hover:text-blue-400">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-base font-light leading-5 text-slate-900 dark:text-slate-200">
                  {dayjsFormat(post.createdAt)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="px-[15px]">
          <h3 className="relative pb-[14px] text-2xl font-bold leading-7 text-slate-900 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-blue-900 dark:text-slate-200 dark:after:bg-blue-600 lg:text-[34px] lg:leading-[42px]">
            <span>Most read</span>
          </h3>
          <ul>
            <MostReadSkeleton />
            <MostReadSkeleton />
            <MostReadSkeleton />
            <MostReadSkeleton />
          </ul>
        </div>
      )}
    </>
  );
};

export default MostRead;
