
/*
 * Initializes the responsive typography system.
 * @param {Object} config - Configuration object.
 * @param {string} config.baseFontSize - The base font size (e.g., "16px").
 * @param {string} config.fontFamily - The font family (e.g., "'Inter', sans-serif").
 */
interface TypographyConfig {
    baseFontSize?: string;
    fontFamily?: string;
}

export function initTypography(options: TypographyConfig = {}) {
    // Set default values if not provided
    const defaults: TypographyConfig = {
        baseFontSize: "16px",
        fontFamily: "'Inter', sans-serif"
    };
    
    // Merge user config with defaults
    const settings = { ...defaults, ...options };

    // Apply settings to the HTML element
    document.documentElement.setAttribute("data-penCssInjected", "true");
    document.documentElement.style.setProperty("--base-font-size", settings.baseFontSize!);
    document.documentElement.style.setProperty("--font-family", settings.fontFamily!);
    
    console.log("Typography system initialized with:", settings);
}

console.log("Typography.js loaded successfully.");
console.log("Checking <html> attributes:", document.documentElement);

// Declare the initTypography property on Window interface
declare global {
    interface Window {
        initTypography: typeof initTypography;
    }
}

window.initTypography = initTypography; // Expose the function to the global scope
