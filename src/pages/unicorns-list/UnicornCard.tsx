import {Component, For, Show} from "solid-js";
import {Unicorn} from "../../models/unicorn.model";
import {isInCart, toggleToCart} from "../../store/cart";

export const UnicornCard: Component<{ unicorn: Unicorn }> = (props) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <figure class="px-10 pt-10">
                <img src={props.unicorn.photo} alt="Photo" class="rounded-xl"/>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{props.unicorn.name}</h2>
                <div>{props.unicorn.id}</div>
                <div>{props.unicorn.birthyear}</div>
                <Show when={props.unicorn.birthyear > new Date().getFullYear() - 5}>(🐣)</Show>
                <div>{props.unicorn.weight}</div>
                <For each={props.unicorn.hobbies}>
                    {(hobby) => <div>{hobby}</div>}
                </For>
                <For each={props.unicorn.capacities}>
                    {(capacity) => <div>{capacity}</div>}
                </For>
                <div class="card-actions">
                    <button type="button"
                            class="btn btn-primary"
                            onclick={[toggleToCart, props.unicorn]}
                            style={{'background-color': isInCart(props.unicorn) ? '#ff4081' : null}}>
                        <span class="material-icons">favorite</span>
                    </button>
                    <button type="button"
                            class="btn btn-primary">
                        <span class="material-icons">edit</span>
                    </button>
                    <button type="button"
                            class="btn btn-primary">
                        <span class="material-icons">visibility</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
