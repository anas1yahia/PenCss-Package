interface TypographyConfig {
    baseFontSize?: string;
    fontFamily?: string;
}
export declare function initTypography(options?: TypographyConfig): void;
declare global {
    interface Window {
        initTypography: typeof initTypography;
    }
}
export {};
