import {createStore} from "solid-js/store";
import {Unicorn} from "../models/unicorn.model";
import {Capacity} from "../models/capacity.model";

interface State {
    unicorns: Unicorn[];
    cart: number[];
    capacities: Capacity[];
}

export const [state, setState] = createStore<State>({
    unicorns: [],
    cart: [],
    capacities: [],
});
