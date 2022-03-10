import {Component, For} from "solid-js";
import {Unicorn} from "../../models/unicorn.model";
import styles from "../../App.module.css";
import {UnicornCard} from "./UnicornCard";

export const UnicornsList: Component<{ unicorns: Unicorn[] }> = (props) => {
    return (
        <div class={styles.Unicorns}>
            <For each={props.unicorns} fallback={<div>Loading...</div>}>
                {(unicorn) => <UnicornCard unicorn={unicorn}/>}
            </For>
        </div>
    )
}
