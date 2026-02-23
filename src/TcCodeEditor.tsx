import { Component, ReactNode, createElement } from "react";
import { TcCodeEditorContainerProps } from "../typings/TcCodeEditorProps";

import "./ui/TcCodeEditor.css";
import { Editor } from "./components/Editor";

export class TcCodeEditor extends Component<TcCodeEditorContainerProps> {
    private readonly onChangeEditorHandle = this.onChangeEditor.bind(this);

    private onChangeEditor(e: any): void {
        console.log("changed -> ", e);
        this.props.editorValue.setValue(e);
    }

    render(): ReactNode {
        const value = this.props.editorValue.value || "";
        return (
            <Editor
                language={this.props.language || "javascript"}
                dark={false}
                onChange={this.onChangeEditorHandle}
                value={value}
                readOnly={this.props.editorValue.readOnly}
                style={this.props.style}
                className={"tcCodeEditor " + this.props.class}
            />
        );
    }
}
