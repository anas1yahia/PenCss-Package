import { initTypography } from "../src/js/typography.js";

initTypography({
    baseFontSize: "17px",
    fontFamily: "'Roboto', sans-serif"
});

function applyTypographyRoles() {
    document.querySelectorAll("[as]").forEach(element => {
        const role = element.getAttribute("as");
        element.classList.add(role); 
    });
}


document.addEventListener("DOMContentLoaded", applyTypographyRoles);
console.log("Typography system initialized with:", settings);
console.log("Typography.js loaded successfully.");
