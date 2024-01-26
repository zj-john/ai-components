import { Result } from 'antd';
import React from 'react';
import "./index.less";
var NoContentImage = 'https://dummyimage.com/180x180/ff0/000';
var ImageResultCard = function ImageResultCard(_ref) {
  var content = _ref.content;
  return content ? /*#__PURE__*/React.createElement("div", null, "1") : /*#__PURE__*/React.createElement("div", {
    className: "component-image-result-card"
  }, /*#__PURE__*/React.createElement(Result, {
    icon: /*#__PURE__*/React.createElement("img", {
      src: NoContentImage
    }),
    title: "Hi\uFF0C\u5728\u5DE6\u4FA7\u8F93\u5165\u4F60\u7684\u521B\u610F\u5427~"
  }));
};
export default ImageResultCard;