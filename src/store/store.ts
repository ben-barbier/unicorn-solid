import {createStore} from "solid-js/store";
import {Unicorn} from "../models/unicorn.model";

interface State {
    unicorns: Unicorn[];
    cart: number[];
}

export const [state, setState] = createStore<State>({
    unicorns: [],
    cart: []
});
