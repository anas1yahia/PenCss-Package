# PenCss Typography System

## 📌 Introduction
PenCss is a responsive and fluid typography system that allows developers to easily manage typography styles using custom HTML attributes (`as="..."`) or class-based styles.

## 🚀 Installation

You can install PenCss via NPM or CDN.

### Prerequisites
- You need a project with HTML, CSS, and JavaScript setup.
- If using NPM, ensure you have Node.js installed.

### 1️⃣ Install via NPM
Install PenCss in your project:
```sh
npm install pencss
```
**For CSS Import (via bundlers):**
```css
@import "pencss/dist/pencss.min.css"; /* Ensure correct path based on your project structure */
```

**For SCSS Import (via bundlers):**
```scss
@import "pencss/dist/pencss.min"; /* Ensure correct path based on your project structure */
```

**For JavaScript Import (ES Module):**
```js
import "pencss"; /* Ensure correct import path */
```

**For JavaScript Import (CommonJS - Node.js projects):**
```js
const pencss = require("pencss"); /* Ensure correct import path */
```

### 2️⃣ Use via CDN
If you don't want to install via NPM, use the CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pencss/dist/typography.min.css">
<script src="https://cdn.jsdelivr.net/npm/pencss/dist/typography.min.js" defer></script>
```
**Usage:**
```js
initTypography({
    baseFontSize: "16px",
    fontFamily: "'Inter', sans-serif"
});
```

### Ensure Dependencies
- If using the package, ensure `node_modules` is properly installed.
- Ensure the correct path is used based on the setup (CDN/NPM).
- If using NPM, ensure your import paths correctly point to the installed package inside `node_modules`.
- If using a module bundler (e.g., Webpack, Vite), adjust import paths accordingly.

### 🔍 Troubleshooting
- Ensure you have run `npm install` if using the package.
- Verify that the correct import path is used (`pencss` for JS and `pencss/dist/typography.css` for CSS).
- If using a module bundler (e.g., Webpack, Vite), make sure it resolves package imports correctly.

## ✨ Usage

**Note:** You can use either `as="..."` attributes or class-based selectors. Both approaches work interchangeably.

### Using Custom Attributes
```html
<h1 as="h1-text">This is a Heading</h1>
<p as="body-text">This is a body paragraph.</p>
<button as="button-text">Click Me</button>
<label as="label-text">Form Label</label>
<blockquote as="quote-text">This is a quote.</blockquote>
<code as="code-text">console.log("Hello World");</code>
```

### Using Class-Based Selectors
```html
<h1 class="h1-text">This is a Heading</h1>
<p class="body-text">This is a body paragraph.</p>
<button class="button-text">Click Me</button>
<label class="label-text">Form Label</label>
<blockquote class="quote-text">This is a quote.</blockquote>
<code class="code-text">console.log("Hello World");</code>
```

### Nesting Typography Example
```html
<div as="body-text">
    <h2 as="h2-text">Section Title</h2>
    <p>This paragraph inherits the body text style.</p>
</div>
```

## 🔧 Customization
Users can define their typography settings using CSS variables:
```css
:root {
    --base-font-size: 18px;
    --font-family: 'Roboto', sans-serif;
}
```

### 📌 Customization Options
Users can override typography settings globally or per element.

#### 1️⃣ Global Customization
Define your base styles in CSS:
```css
:root {
    --base-font-size: 18px;
    --font-family: 'Roboto', sans-serif;
}
```

#### 2️⃣ Per Element Customization
You can override styles on a per-element basis:
```css
[as="h1-text"], .h1-text {
    font-size: 2.5rem;
    font-weight: bold;
}
```

## 📜 initTypography() Function
This function dynamically injects user-defined typography settings.

**Parameters:**
- `baseFontSize` (string): Defines the base font size (e.g., `"16px"`).
- `fontFamily` (string): Defines the font family (e.g., `"'Inter', sans-serif"`).

**Note:** Calling `initTypography()` is required to apply dynamic styles set via JavaScript.

Example:
```js
initTypography({
    baseFontSize: "18px",
    fontFamily: "'Roboto', sans-serif"
});
```

## 📄 Best Practices
- Use `as="..."` for cleaner semantic HTML without extra classes.
- Use class-based selectors when working with third-party frameworks that do not support custom attributes.
- Structure typography settings in CSS using `:root` variables for easy scaling.

## 📄 License
This project is licensed under the MIT License.
