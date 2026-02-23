## tccodeeditor
[tccodeeditor for Mendix]
# TcCodeEditor

TcCodeEditor is a Mendix widget that provides an embeddable code editor for your Mendix apps. It is built on top of the React CodeMirror integration (`react-codemirror` / CodeMirror 6) and exposes a simple set of properties to edit, view, and validate code inside the Mendix Modeler and runtime pages.

**Features**

- **Lightweight React wrapper**: Uses `react-codemirror` as the base editor.
- **Syntax highlighting**: Support for multiple languages via CodeMirror modes.
- **Configurable**: Expose editor language, theme, read-only mode, and line numbers.
- **Styling**: Includes a CSS file for quick customization.

**Installation**

1. Place the widget folder into your Mendix project's `widgets` directory (or install via your preferred widget packaging flow).
2. In the Mendix Modeler, add the `TcCodeEditor` widget to a page and bind the `Value` property to a string attribute containing the code.

**Usage**

- `Value` (string): the code contents to display and edit.
- `Language` (string): language identifier (e.g., `javascript`, `typescript`, `xml`, `json`, etc.) used for syntax highlighting.
- `ReadOnly` (boolean): whether the editor is read-only.
- `ShowLineNumbers` (boolean): toggle line numbers.
- `Theme` (string): editor theme (if supported by included CodeMirror setup).

Include the stylesheet from the widget in your project if you need the default styling: `src/ui/TcCodeEditor.css`.

**Development**

Run these commands from the widget root to build and test locally:

```bash
npm install
npm run build
```

If your workspace includes other scripts (watch, lint, etc.), use them as needed.

**Building for Mendix**

After building, ensure the widget package is the version expected by your Mendix app and import it into the Modeler if required by your packaging workflow.

**Contributing**

Contributions, bug reports and feature requests are welcome. Open an issue or submit a pull request with a clear description and reproduction steps.

**License**

See the project `LICENSE` file for licensing details.
