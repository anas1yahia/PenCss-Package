/**
 * Initializes the responsive typography system.
 * @param {Object} config - Configuration object.
 * @param {string} config.baseFontSize - The base font size (e.g., "16px").
 * @param {string} config.fontFamily - The font family (e.g., "'Inter', sans-serif").
 */
export function initTypography(config = {}) {
    // Set default values if not provided
    const defaults = {
        baseFontSize: "168px",
        fontFamily: "'Inter', sans-serif"
    };
    
    // Merge user config with defaults
    const settings = { ...defaults, ...config };

    // Apply settings to the HTML element
    document.documentElement.setAttribute("data-penCssInjected", "true");
    document.documentElement.style.setProperty("--base-font-size", settings.baseFontSize);
    document.documentElement.style.setProperty("--font-family", settings.fontFamily);
    
    console.log("Typography system initialized with:", settings);
}

// Export the function for modular usage (Node.js, ES6 imports)
if (typeof module !== "undefined") {
    module.exports = { initTypography };
}

console.log("Typography.js loaded successfully.");
console.log("Checking <html> attributes:", document.documentElement);

window.initTypography = initTypography; // Expose the function to the global scope