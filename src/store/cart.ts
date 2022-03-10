import {createSignal} from "solid-js";
import {Unicorn} from "../models/unicorn.model";

export const [getCart, setCart] = createSignal<Unicorn[]>([]);

export const clearCart = () => setCart([]);
export const addToCart = (unicorn: Unicorn) => setCart([...getCart(), unicorn]);
export const removeFromCart = (unicorn: Unicorn) => setCart([...getCart().filter(u => u.id !== unicorn.id)]);
export const isInCart = (unicorn: Unicorn) => getCart().some(u => u.id === unicorn.id);
export const toggleToCart = (unicorn: Unicorn) => {
    if (isInCart(unicorn)) {
        removeFromCart(unicorn);
    } else {
        addToCart(unicorn);
    }
}
