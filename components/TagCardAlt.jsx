import React from "react";
import Link from "next/link";

const TagCardAlt = ({ post }) => {
  return (
    <div>
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
                    ? "Sport"
                    : null,
                ]}
              </span>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default TagCardAlt;
