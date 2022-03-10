import {Component} from "solid-js";
import {Unicorn} from "../../models/unicorn.model";
import styles from "../../App.module.css";
import {UnicornCard} from "./UnicornCard";

export const UnicornsList: Component<{ unicorns: Unicorn[] }> = (props) => {
    return (
        <div class={styles.Unicorns}>
            {props.unicorns.map(unicorn =>
                <UnicornCard unicorn={unicorn}/>
            )}
        </div>
    )
}
