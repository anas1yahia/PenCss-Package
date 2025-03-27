const fs = require('fs');
const path = require('path');

const settingsPath = path.join(
  process.env.HOME || process.env.USERPROFILE,
  '.vscode/settings.json'
);

const customDataPath = path.join(
  "./custom/attr-custom-data.json"
);
const customDataConfig = { "html.customData": [customDataPath] };

try {
  let settings = fs.existsSync(settingsPath)
    ? fs.readFileSync(settingsPath, "utf8")
    : "{}";
  settings = JSON.parse(settings);

  if (!settings["html.customData"] || !settings["html.customData"].includes(customDataPath)) {
    settings["html.customData"] = [customDataPath];
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    console.log("✅ Autocomplete enabled for 'as' attributes in VS Code.");
  } else {
    console.log("ℹ️ Autocomplete is already enabled.");
  }
} catch (error) {
  console.error("⚠️ Error updating VS Code settings:", error.message);
}