import { createElement } from "react";
import { LifecycleContainerProps } from "../typings/LifecycleProps";
import { useMount } from "ahooks";

export default function (props: LifecycleContainerProps) {
    useMount(() => {
        props.actionMount?.execute();
    });

    return <div>{props.content}</div>;
}
