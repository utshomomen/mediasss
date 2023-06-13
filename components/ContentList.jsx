import React, { useLayoutEffect, useState } from "react";
import ContentTabs from "./Tabs";
import Pagination from "./Pagination";
import Advertisement from "./Advertisement";
import ContentListCard from "./ContentListCard";

const ContentList = ({ posts, totalPages, page }) => {
  const [size, setSize] = useState(1440);
  useLayoutEffect(() => {
    const resizeWindow = () => {
      setSize(window.innerWidth);
    }
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <section className="contentList">
      <div className="wrapper">
        <div className="contentList__container">
          <div className="contentList__left">
            <div className="contentList__cards">
              {page === 1 ? (
                posts.slice(3, 10).map((post) => (
                  <ContentListCard post={post} key={post._id} />
                ))
              ) : (
                posts.map((post) => (
                  <ContentListCard post={post} key={post._id} />
                ))
              )}
            </div>
            {totalPages > 0 && (
              <Pagination total_pages={totalPages} page={page} />
            )}
          </div>
          {posts.length > 3 && (
            <div className="contentList__right">
              {size < 992 && (
                <Advertisement
                  photo="https://res.cloudinary.com/tachibao/image/upload/v1666539636/posts/31973544965_6fe1029c51_k_rcohkj_f8orc4.jpg"
                  blurhash="LGJ@C6?^9EIUyYr;vz4.008_E2Na"
                />
              )}
              <ContentTabs />
              {size > 992 && (
                <Advertisement
                  photo="https://res.cloudinary.com/tachibao/image/upload/v1666539636/posts/31973544965_6fe1029c51_k_rcohkj_f8orc4.jpg"
                  blurhash="LGJ@C6?^9EIUyYr;vz4.008_E2Na"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentList;
