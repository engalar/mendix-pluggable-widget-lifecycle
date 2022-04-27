/**
 * This file was generated from Lifecycle.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue } from "mendix";

export interface LifecycleContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    content?: ReactNode;
    actionMount?: ActionValue;
}

export interface LifecyclePreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    actionMount: {} | null;
}
