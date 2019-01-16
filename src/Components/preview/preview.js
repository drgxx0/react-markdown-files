import React from "react";
import marked from "marked"

import './preview.css'

const Preview = ({ input }) => {

  const mk = () => {
  const converText = marked(input,{gfm: true, breaks: true})
  return {
    __html: converText
  }
  }
  return (
    <div className="previewBox">
      <div className="previewHeader">Preview</div>
      <div id="preview" className="previewContent" dangerouslySetInnerHTML={mk()}></div>
    </div>
  );
};

export default Preview;
