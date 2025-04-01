"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/Footer.css");
var constants_1 = require("../utils/constants");
var Footer = function () {
    var navigateToService = function (url) {
        try {
            window.location.href = url;
        }
        catch (error) {
            console.error('Navigation error:', error);
            alert('Unable to access the service. Please make sure it is running.');
        }
    };
    return ((0, jsx_runtime_1.jsxs)("footer", { className: "footer", children: [(0, jsx_runtime_1.jsxs)("div", { className: "footer-content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "footer-section", children: [(0, jsx_runtime_1.jsx)("h3", { children: "MedPred" }), (0, jsx_runtime_1.jsx)("p", { children: "Advanced medical prediction system powered by AI" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-section", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Quick Links" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "/", onClick: function (e) {
                                                e.preventDefault();
                                                window.location.href = '/';
                                            }, children: "Home" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "#", onClick: function (e) {
                                                e.preventDefault();
                                                navigateToService(constants_1.SERVICES.BREAST_CANCER);
                                            }, children: "Breast Cancer Detection" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "#", onClick: function (e) {
                                                e.preventDefault();
                                                navigateToService(constants_1.SERVICES.DIABETES);
                                            }, children: "Diabetes Detection" }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-section", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Contact" }), (0, jsx_runtime_1.jsx)("p", { children: "Email: contact@medpred.com" }), (0, jsx_runtime_1.jsx)("p", { children: "Phone: +1 (555) 123-4567" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "footer-bottom", children: (0, jsx_runtime_1.jsx)("p", { children: "\u00A9 2024 MedPred. All rights reserved." }) })] }));
};
exports.default = Footer;
