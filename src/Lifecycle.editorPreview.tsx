import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { LifecyclePreviewProps } from "../typings/LifecycleProps";

declare function require(name: string): string;

export function preview(props: LifecyclePreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
