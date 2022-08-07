import React from "react";

const Tag = ({ name, children }) => {
  return (
    <>
      <div className="html__tag">
        <span className="html__tag-tag">&#60;</span>
        <span className="html__tag-name">{name}</span>
        <span className="html__tag-tag">&#62;</span>
      </div>
      <div className="html__tag-after">{children}</div>
      <div className="html__tag">
        <span className="html__tag-tag">&#60;/</span>
        <span className="html__tag-name">{name}</span>
        <span className="html__tag-tag">&#62;</span>
      </div>
    </>
  );
};

export default Tag;
