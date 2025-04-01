"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var constants_1 = require("../utils/constants");
require("../styles/Navbar.css");
var Navbar = function () {
    var navigateToService = function (url) {
        try {
            window.location.href = url;
        }
        catch (error) {
            console.error('Navigation error:', error);
            alert('Unable to access the service. Please make sure it is running.');
        }
    };
    return ((0, jsx_runtime_1.jsxs)("nav", { className: "navbar", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "nav-logo", children: "MedPred" }), (0, jsx_runtime_1.jsxs)("div", { className: "nav-links", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "nav-link", children: "Home" }), (0, jsx_runtime_1.jsx)("span", { className: "nav-link", onClick: function () { return navigateToService(constants_1.SERVICES.BREAST_CANCER); }, style: { cursor: 'pointer' }, children: "Breast Cancer" }), (0, jsx_runtime_1.jsx)("span", { className: "nav-link", onClick: function () { return navigateToService(constants_1.SERVICES.DIABETES); }, style: { cursor: 'pointer' }, children: "Diabetes" })] })] }));
};
exports.default = Navbar;
