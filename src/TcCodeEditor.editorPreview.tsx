import { Component, ReactNode, createElement } from "react";
import { TcCodeEditorContainerProps } from "typings/TcCodeEditorProps";

export class preview extends Component<TcCodeEditorContainerProps> {
    render(): ReactNode {
        return <div>CODE EDITOR</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TcCodeEditor.css");
}
