import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { LifecyclePreviewProps } from "../typings/LifecycleProps";

export function getProperties(
    values: LifecyclePreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: LifecyclePreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
