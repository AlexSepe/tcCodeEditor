import { Component, CSSProperties, ReactNode, createElement } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import { css } from "@codemirror/lang-css";
import { LanguageEnum } from "typings/TcCodeEditorProps";

export interface EditorProps {
    language: LanguageEnum; // "html" | "sql" | "javascript" | "json";
    dark: boolean;
    onChange?: (value: any) => void;
    onBlur?: (value: any) => void;
    value?: string;
    style?: CSSProperties;
    className?: string;
    readOnly?: boolean;
}

export class Editor extends Component<EditorProps> {
    private readonly handleChange = this.onChange.bind(this);
    extension =
        this.props.language === "javascript"
            ? [javascript({ jsx: true })]
            : this.props.language === "html"
            ? [html()]
            : this.props.language === "json"
            ? [json()]
            : [css()];

    private onChange(newValue: string): void {
        if (this.props.onChange) {
            this.props.onChange(newValue);
        }
    }

    render(): ReactNode {
        return (
            <CodeMirror
                className={this.props.className}
                style={this.props.style}
                width="100%"
                height="100%"
                theme={this.props.dark ? vscodeDark : vscodeLight}
                value={this.props.value}
                onChange={this.handleChange}
                extensions={this.extension}
                readOnly={this.props.readOnly}
                basicSetup={{
                    lineNumbers: true,
                    foldGutter: true,
                    highlightActiveLineGutter: true,
                    highlightSpecialChars: true,
                    history: true,
                    drawSelection: true,
                    dropCursor: true,
                    allowMultipleSelections: true,
                    indentOnInput: true,
                    syntaxHighlighting: true,
                    bracketMatching: true,
                    closeBrackets: true,
                    autocompletion: true,
                    rectangularSelection: true,
                    crosshairCursor: true,
                    highlightActiveLine: true
                }}
            />
        );
    }
}
