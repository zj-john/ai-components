import { Col, Row } from 'antd';
import React from 'react';
import CustomImage from "./custom.png";
import "./index.less";
var SizeSelect = function SizeSelect(_ref) {
  var ratio = _ref.ratio,
    name = _ref.name;
  return /*#__PURE__*/React.createElement("div", {
    className: "component-size-select"
  }, ratio !== 'custom' ? /*#__PURE__*/React.createElement("div", {
    className: "size-ratio"
  }, /*#__PURE__*/React.createElement("span", null, ratio)) : /*#__PURE__*/React.createElement("div", {
    className: "size-ratio"
  }, /*#__PURE__*/React.createElement("img", {
    src: CustomImage
  })), name);
};
var SizeSelectGroup = function SizeSelectGroup(_ref2) {
  var _ref2$options = _ref2.options,
    options = _ref2$options === void 0 ? [] : _ref2$options,
    _ref2$vGutter = _ref2.vGutter,
    vGutter = _ref2$vGutter === void 0 ? 16 : _ref2$vGutter,
    _ref2$hGutter = _ref2.hGutter,
    hGutter = _ref2$hGutter === void 0 ? 16 : _ref2$hGutter,
    _ref2$ColInRow = _ref2.ColInRow,
    ColInRow = _ref2$ColInRow === void 0 ? 8 : _ref2$ColInRow;
  return /*#__PURE__*/React.createElement(Row, {
    gutter: [hGutter, vGutter],
    className: "component-size-select-group"
  }, options.map(function (item) {
    return /*#__PURE__*/React.createElement(Col, {
      span: ColInRow,
      key: item.name
    }, /*#__PURE__*/React.createElement(SizeSelect, {
      ratio: item.ratio,
      name: item.name
    }));
  }));
};
export { SizeSelect, SizeSelectGroup };