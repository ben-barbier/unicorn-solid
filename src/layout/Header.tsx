import {Component} from "solid-js";
import {getCart} from "../store/cart";

export const Header: Component = () => {
    return (
        <header>
            <div class="navbar bg-base-100">
                <div class="flex-none">
                    <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
                        <span class="material-icons">menu</span>
                    </label>
                </div>
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">Unicorn Solid</a>
                </div>
                <div class="flex-none">
                    <button class="btn btn-square btn-ghost">
                        <span class="material-icons">shopping_basket</span>
                        <span>{getCart().length}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
