export function initTypography(options = {}) {
    // Set default values if not provided
    const defaults = {
        baseFontSize: "16px",
        fontFamily: "'Inter', sans-serif"
    };
    // Merge user config with defaults
    const settings = Object.assign(Object.assign({}, defaults), options);
    // Apply settings to the HTML element
    document.documentElement.setAttribute("data-penCssInjected", "true");
    document.documentElement.style.setProperty("--base-font-size", settings.baseFontSize);
    document.documentElement.style.setProperty("--font-family", settings.fontFamily);
    console.log("Typography system initialized with:", settings);
}
console.log("Typography.js loaded successfully.");
console.log("Checking <html> attributes:", document.documentElement);
window.initTypography = initTypography; // Expose the function to the global scope
