import { Col, Row } from 'antd';
import React from 'react';
import "./index.less";
var SceneSelect = function SceneSelect(_ref) {
  var img = _ref.img,
    name = _ref.name;
  return /*#__PURE__*/React.createElement("div", {
    className: "component-scene-select"
  }, /*#__PURE__*/React.createElement("div", {
    className: "context"
  }, /*#__PURE__*/React.createElement("img", {
    src: img
  }), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, name)));
};
var SceneSelectGroup = function SceneSelectGroup(_ref2) {
  var options = _ref2.options,
    _ref2$vGutter = _ref2.vGutter,
    vGutter = _ref2$vGutter === void 0 ? 16 : _ref2$vGutter,
    _ref2$hGutter = _ref2.hGutter,
    hGutter = _ref2$hGutter === void 0 ? 16 : _ref2$hGutter,
    _ref2$ColInRow = _ref2.ColInRow,
    ColInRow = _ref2$ColInRow === void 0 ? 3 : _ref2$ColInRow;
  return /*#__PURE__*/React.createElement(Row, {
    gutter: [hGutter, vGutter],
    className: "component-size-select-group"
  }, options.map(function (item) {
    return /*#__PURE__*/React.createElement(Col, {
      span: ColInRow,
      key: item.name
    }, /*#__PURE__*/React.createElement(SceneSelect, {
      img: item.img,
      name: item.name
    }));
  }));
};
export { SceneSelect, SceneSelectGroup };