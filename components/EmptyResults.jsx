import React from "react";
import { SvgEmptyResults } from "./svgs/SvgEmptyResults";

const EmptyResults = () => {
  return (
    <div className="emptyResults">
      <div className="emptyResults__wrapper">
        <figure className="emptyResults__icon">
          <SvgEmptyResults />
        </figure>
        <p className="emptyResults__message dark:text-slate-200">
          Do not have <br />
          What results were found for your search.
        </p>
      </div>
    </div>
  );
};

export default EmptyResults;
