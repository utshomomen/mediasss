import React from "react";
import LazyLoadImage from "./LazyLoadImage";

const PeopleGrid = () => {
  return (
    <section className="peopleGrid neu-01 line" data-items="3">
      <div className="wrapper">
        <div className="peopleGrid__heading">
          <h2 className="peopleGrid__title dark:text-slate-200">
            <span>Catalog</span>
          </h2>
        </div>
        <div className="peopleGrid__container">
          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                // photo={require("../assets/images/profile01.jpg")}
                blurhash="LBE2^B~q?aD%8{9F9G?a?bD*axNG"
                alt="BTC"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
              number 1 bitcoin
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
            bitcoin
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                // photo={require("../assets/images/profile02.jpg")}
                blurhash="LiNvl8t7?]MyXPIUMxt6S$RkV@oy"
                alt="ETH"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
            number 2 bitcoin
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              ETH
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                // photo={require("../assets/images/profile03.jpg")}
                blurhash="LQQQ]?^,}bSc8_pI%LV[.8Z~I:oz"
                alt="DOG"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
            number 3 DOGECOIN
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              DOGECOIN
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                // photo={require("../assets/images/profile03.jpg")}
                blurhash="LQQQ]?^,}bSc8_pI%LV[.8Z~I:oz"
                alt="DOG"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
            number 3 DOGECOIN
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              DOGECOIN
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                // photo={require("../assets/images/profile03.jpg")}
                blurhash="LQQQ]?^,}bSc8_pI%LV[.8Z~I:oz"
                alt="DOG"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
            number 3 DOGECOIN
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              DOGECOIN
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                // photo={require("../assets/images/profile03.jpg")}
                blurhash="LQQQ]?^,}bSc8_pI%LV[.8Z~I:oz"
                alt="DOG"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
            number 3 DOGECOIN
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              DOGECOIN
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                // photo={require("../assets/images/profile03.jpg")}
                blurhash="LQQQ]?^,}bSc8_pI%LV[.8Z~I:oz"
                alt="DOG"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
            number 3 DOGECOIN
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              DOGECOIN
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                // photo={require("../assets/images/profile03.jpg")}
                blurhash="LQQQ]?^,}bSc8_pI%LV[.8Z~I:oz"
                alt="DOG"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
            number 3 DOGECOIN
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              DOGECOIN
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                // photo={require("../assets/images/profile03.jpg")}
                blurhash="LQQQ]?^,}bSc8_pI%LV[.8Z~I:oz"
                alt="DOG"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
            number 3 DOGECOIN
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              DOGECOIN
            </p>
          </article>


        </div>
      </div>
    </section>
  );
};

export default PeopleGrid;
