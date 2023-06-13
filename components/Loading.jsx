import React from "react";
import { SvgLoading } from "./svgs/SvgLoading";

const Loading = () => {
  return (
    <div className="loader z-40 dark:bg-gray-900">
      <SvgLoading />
    </div>
  );
};

export default Loading;
