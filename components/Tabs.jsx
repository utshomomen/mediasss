import React, { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import TabsSkeleton from "./TabsSkeleton";
import cx from "classnames";
import { domainApi } from "../requestMethods";
import { dayjsFormat, dayjsFormatFromNow } from "../utils/dayjsFormat";

const Tabs = () => {
  const [active, setActive] = useState("tab1");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`${domainApi}/posts?newest=true`, fetcher);
  if (error) return <div className="error">Failed to load</div>;

  return (
    <>
      {data ? (
        <div className="tabs">
          <div className="tabs__wrapper">
            <div className="tabs__heading">
              <div className="tabs__button dark:!border-blue-700">
                <h3
                  onClick={() => setActive("tab1")}
                  className={cx("tabs__mainTitle dark:text-slate-100", {
                    "!font-extrabold after:bg-blue-700 dark:after:bg-blue-700":
                      active === "tab1",
                  })}
                >
                  <span>Most recent
</span>
                </h3>
                <h3
                  onClick={() => setActive("tab2")}
                  className={cx("tabs__mainTitle dark:text-slate-100", {
                    "!font-extrabold after:bg-blue-700 dark:after:bg-blue-700":
                      active === "tab2",
                  })}
                >
                  <span>Read more
</span>
                </h3>
              </div>
            </div>
            <div className={cx("tabs__list", { show: active === "tab1" })}>
              {data.posts.slice(0, 4).map((post) => (
                <div
                  className="tabs__listItem dark:border-b dark:border-slate-600"
                  key={post._id}
                >
                  <div>
                    {/* Specify the path if there is a subCategory, use css to hide an item  1 item c */}
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
                            className="tabs__tag dark:text-blue-400 duration-200 ease-in dark:hover:opacity-60"
                          >
                            <span>
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
                            className="tabs__tag dark:text-blue-400 duration-200 ease-in dark:hover:opacity-60"
                          >
                            <span>
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
                    <h3 className="tabs__title dark:text-slate-100">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="tabs__date dark:text-slate-100">
                    {dayjsFormatFromNow(post.createdAt)}
                  </p>
                </div>
              ))}
            </div>
            <div className={cx("tabs__list", { show: active === "tab2" })}>
              {data.posts.slice(4, 8).map((post) => (
                <div
                  className="tabs__listItem dark:border-b dark:border-slate-600"
                  key={post._id}
                >
                  <div>
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
                            className="tabs__tag dark:text-blue-400 duration-200 ease-in dark:hover:opacity-60"
                          >
                            <span>
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
                            className="tabs__tag dark:text-blue-400 duration-200 ease-in dark:hover:opacity-60"
                          >
                            <span>
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
                    <h3 className="tabs__title dark:text-slate-100">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="tabs__date dark:text-slate-100">
                    {dayjsFormat(post.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="tabs">
          <div className="tabs__wrapper">
            <div className="tabs__heading">
              <div className="tabs__button">
                <h3 className="tabs__mainTitle active dark:text-slate-100">
                  <span>Most recent</span>
                </h3>
                <h3 className="tabs__mainTitle dark:text-slate-100">
                  <span>Read more</span>
                </h3>
              </div>
            </div>
            <div className="tabs__list show">
              <TabsSkeleton />
              <TabsSkeleton />
              <TabsSkeleton />
              <TabsSkeleton />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tabs;
