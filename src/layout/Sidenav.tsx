import {Component} from "solid-js";

export const Sidebar: Component = () => {
    return (
        <>
            <label for="my-drawer" class="drawer-overlay"/>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                {/*Sidebar content here */}
                <li><a>Unicorns list</a></li>
                <li><a>Admin</a></li>
            </ul>
        </>
    );
}
