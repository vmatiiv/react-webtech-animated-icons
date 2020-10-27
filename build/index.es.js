import React from 'react';
import styled, { keyframes } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var radius = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%{\n    r:0;\n  }\n  100%{\n    r:13;\n  }\n"], ["\n  0%{\n    r:0;\n  }\n  100%{\n    r:13;\n  }\n"])));
var reverse = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nto{\n  r:0\n}\n/* 0%{ */\n  /* r:12 */\n/* } */\n  /* 100%{ */\n    /* r:0; */\n  /* } */\n"], ["\nto{\n  r:0\n}\n/* 0%{ */\n  /* r:12 */\n/* } */\n  /* 100%{ */\n    /* r:0; */\n  /* } */\n"])));
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  circle{\n    animation: ", " ", " ease forwards;\n  }\n  &:hover{\n    circle{\n      animation: ", " ", " ease forwards;\n    }\n  }\n"], ["\n  circle{\n    animation: ", " ", " ease forwards;\n  }\n  &:hover{\n    circle{\n      animation: ", " ", " ease forwards;\n    }\n  }\n"])), reverse, function (props) {
  return props.dur + "s";
}, radius, function (props) {
  return props.dur + "s";
});

function GatsbyIcon(_a) {
  var firstColor = _a.firstColor,
      secondColor = _a.secondColor,
      size = _a.size,
      duration = _a.duration,
      rest = __rest(_a, ["firstColor", "secondColor", "size", "duration"]);

  return /*#__PURE__*/React.createElement(Svg, __assign({
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: size,
    width: size,
    xmlns: "http://www.w3.org/2000/svg",
    dur: duration
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M22,12.0921187 L15.5483871,12.0921187 L15.5483871,13.9264656 L19.9717742,13.9264656 C19.3266129,16.6787886 17.2983871,18.9719229 14.6262097,19.8898991 L4.02701613,9.33979569 C5.13306452,6.12868525 8.26653226,3.83514962 11.8616935,3.83514962 C14.6266129,3.83514962 17.1157258,5.21191322 18.6818548,7.32161278 L20.0649194,6.12948803 C18.2205645,3.65091216 15.2717742,2 11.8616935,2 C7.06895161,2 3.01370968,5.39454513 2,9.89009975 L14.1653226,22 C18.5887097,20.8989905 22,16.8622233 22,12.091316 L22,12.0921187 Z M2,12 C2,14.5927726 3.01847351,17.0923675 4.96305299,19.036947 C6.90763247,20.9815265 9.50040512,22 12,22 L2,12 Z"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "gnida",
    r: "0",
    cx: "12",
    cy: "12",
    fill: firstColor
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2,12 C2,14.5927726 3.01847351,17.0923675 4.96305299,19.036947 C6.90763247,20.9815265 9.50040512,22 12,22 L2,12 Z",
    fill: secondColor
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22,12.0921187 L15.5483871,12.0921187 L15.5483871,13.9264656 L19.9717742,13.9264656 C19.3266129,16.6787886 17.2983871,18.9719229 14.6262097,19.8898991 L4.02701613,9.33979569 C5.13306452,6.12868525 8.26653226,3.83514962 11.8616935,3.83514962 C14.6266129,3.83514962 17.1157258,5.21191322 18.6818548,7.32161278 L20.0649194,6.12948803 C18.2205645,3.65091216 15.2717742,2 11.8616935,2 C7.06895161,2 3.01370968,5.39454513 2,9.89009975 L14.1653226,22 C18.5887097,20.8989905 22,16.8622233 22,12.091316 L22,12.0921187 Z",
    fill: secondColor
  }));
}

GatsbyIcon.defaultProps = {
  firstColor: '#663399',
  secondColor: '#fff',
  size: 32,
  rest: {},
  duration: 1
};
var templateObject_1, templateObject_2, templateObject_3;

export { GatsbyIcon };
//# sourceMappingURL=index.es.js.map
