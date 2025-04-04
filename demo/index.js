// main.js or your entry file
import { initTypography } from 'pencss';
import 'pencss/css';
// Initialize the typography system

initTypography({
    baseFontSize: "10px",
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
 