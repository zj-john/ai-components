import { CopyOutlined, DislikeOutlined, LikeOutlined, ShareAltOutlined, SyncOutlined } from '@ant-design/icons';
import { Bubble } from '@chatui/core';
import { Space, Tooltip } from 'antd';
import React from 'react';
var RobotBubble = function RobotBubble(content) {
  var text = content.text;
  console.log(content);
  return /*#__PURE__*/React.createElement("div", {
    className: "robot-msg"
  }, /*#__PURE__*/React.createElement(Bubble, null, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, text), /*#__PURE__*/React.createElement("div", {
    className: "extra"
  }, /*#__PURE__*/React.createElement("div", {
    className: "refresh"
  }, /*#__PURE__*/React.createElement(Space, {
    size: 6
  }, /*#__PURE__*/React.createElement(SyncOutlined, {
    style: {
      fontSize: '16px'
    }
  }), "\u91CD\u65B0\u751F\u6210")), /*#__PURE__*/React.createElement("div", {
    className: "action"
  }, /*#__PURE__*/React.createElement(Space, {
    size: 16
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "\u590D\u5236"
  }, /*#__PURE__*/React.createElement(CopyOutlined, {
    style: {
      fontSize: '16px'
    }
  })), /*#__PURE__*/React.createElement(Tooltip, {
    title: "\u5206\u4EAB"
  }, /*#__PURE__*/React.createElement(ShareAltOutlined, {
    style: {
      fontSize: '16px'
    }
  })), /*#__PURE__*/React.createElement(Tooltip, {
    title: "\u559C\u6B22"
  }, ' ', /*#__PURE__*/React.createElement(LikeOutlined, {
    style: {
      fontSize: '16px'
    }
  })), /*#__PURE__*/React.createElement(Tooltip, {
    title: "\u4E0D\u559C\u6B22"
  }, /*#__PURE__*/React.createElement(DislikeOutlined, {
    style: {
      fontSize: '16px'
    }
  })))))));
};
export default RobotBubble;