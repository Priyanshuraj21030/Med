"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var MainPage_1 = __importDefault(require("./pages/MainPage"));
var Navbar_1 = __importDefault(require("./components/Navbar"));
var Footer_1 = __importDefault(require("./components/Footer"));
require("./styles/App.css");
var App = function () {
    var handleNavigation = function (path) {
        window.location.href = path;
    };
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("div", { className: "app", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(MainPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/breast-cancer", element: (0, jsx_runtime_1.jsx)("div", { onLoad: function () { return handleNavigation('http://127.0.0.1:5000'); } }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/diabetes", element: (0, jsx_runtime_1.jsx)("div", { onLoad: function () { return handleNavigation('http://127.0.0.1:5001'); } }) })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }) }));
};
exports.default = App;
