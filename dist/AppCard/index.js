function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { RocketFilled, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Tag } from 'antd';
import React, { useState } from 'react';
import "./index.less";
var AppCard = function AppCard(_ref) {
  var _ref$tags = _ref.tags,
    tags = _ref$tags === void 0 ? [] : _ref$tags,
    name = _ref.name,
    avatarUrl = _ref.avatarUrl,
    desc = _ref.desc,
    _ref$user = _ref.user,
    user = _ref$user === void 0 ? '系统用户' : _ref$user,
    _ref$userAvatarUrl = _ref.userAvatarUrl,
    userAvatarUrl = _ref$userAvatarUrl === void 0 ? 'https://dummyimage.com/80x80/ff0/000' : _ref$userAvatarUrl,
    onClick = _ref.onClick,
    starNum = _ref.starNum,
    type = _ref.type,
    focus = _ref.focus;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  var handleMouseEnter = function handleMouseEnter() {
    setIsHovered(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setIsHovered(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "component-app-card",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-body",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, focus && /*#__PURE__*/React.createElement("div", {
    className: "focus"
  }, /*#__PURE__*/React.createElement("span", null, focus)), /*#__PURE__*/React.createElement("div", {
    className: "basic"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avatarUrl,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, name)), type && /*#__PURE__*/React.createElement("div", {
    className: "type"
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: /*#__PURE__*/React.createElement(RocketFilled, null)
  }, type))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, tags.map(function (tag) {
    return /*#__PURE__*/React.createElement(Tag, {
      color: "processing",
      key: tag
    }, tag);
  })), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, desc))), isHovered ? /*#__PURE__*/React.createElement("div", {
    className: "btn-footer"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: onClick
  }, "\u7ACB\u5373\u4F53\u9A8C")) : /*#__PURE__*/React.createElement("div", {
    className: "app-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user"
  }, /*#__PURE__*/React.createElement("span", {
    className: "user-name"
  }, "\u521B\u5EFA\u8005\uFF1A", /*#__PURE__*/React.createElement(Avatar, {
    src: userAvatarUrl,
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, user))), /*#__PURE__*/React.createElement("div", {
    className: "summary"
  }, starNum && /*#__PURE__*/React.createElement("div", {
    className: "star"
  }, /*#__PURE__*/React.createElement(StarOutlined, null), " ", Number(starNum)))));
};
export default AppCard;