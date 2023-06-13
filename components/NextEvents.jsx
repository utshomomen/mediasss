import React from "react";
import Link from "next/link";

const NextEvents = () => {
  return (
    <div className="nextEvents">
      <div className="nextEvents__wrapper">
        <div className="nextEvents__heading">
          <h3 className="nextEvents__mainTitle dark:after:bg-blue-600">
            Next event
          </h3>
        </div>
        <div className="nextEvents__list">
          <div className="nextEvents__listItem dark:border-b dark:border-slate-600">
            <div className="nextEvents__content">
              <div className="nextEvents__info hover:text-blue-900 dark:hover:text-blue-400">
                <Link href="/slug">
                  <h3 className="nextEvents__title">
                  Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="nextEvents__description">
                    Lorem ipsum dolor sit amet.
                  </p>
                </Link>
              </div>
              <p className="nextEvents__dateRange dark:text-blue-400">
               25 lorem4
              </p>
            </div>
          </div>
          <div className="nextEvents__listItem dark:border-b dark:border-slate-600">
            <div className="nextEvents__content">
              <div className="nextEvents__info hover:text-blue-900 dark:hover:text-blue-400">
                <Link href="/slug">
                  <h3 className="nextEvents__title">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="nextEvents__description">
                   Lorem ipsum dolor sit amet consectetur.
                  </p>
                </Link>
              </div>
              <p className="nextEvents__dateRange dark:text-blue-400">
                Lorem, ipsum.
              </p>
            </div>
          </div>
          <div className="nextEvents__listItem dark:border-b dark:border-slate-600">
            <div className="nextEvents__content">
              <div className="nextEvents__info hover:text-blue-900 dark:hover:text-blue-400">
                <Link href="/slug">
                  <h3 className="nextEvents__title">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="nextEvents__description">
                  Lorem ipsum dolor sit amet consectetur.
                  </p>
                </Link>
              </div>
              <p className="nextEvents__dateRange dark:text-blue-400">
                Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <div className="nextEvents__listItem dark:border-b dark:border-slate-600">
            <div className="nextEvents__content">
              <div className="nextEvents__info hover:text-blue-900 dark:hover:text-blue-400">
                <Link href="/slug">
                  <h3 className="nextEvents__title">
                  Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="nextEvents__description">
                  Lorem ipsum dolor sit amet consectetur.
                  </p>
                </Link>
              </div>
              <p className="nextEvents__dateRange dark:text-blue-400">
                Lorem, ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvents;
