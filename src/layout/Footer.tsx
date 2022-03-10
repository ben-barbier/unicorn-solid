import {Component} from "solid-js";

export const Footer: Component = () => {
    return (
        <footer class="items-center p-4 footer bg-neutral text-neutral-content">
            <div class="items-center grid-flow-col">
                <img alt="Tech Homies" style="height: 36px" src="http://tech-homies.io/tech-homies-logo.631f7001.png"/>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <span class="material-icons">school</span>
            </div>
        </footer>
    );
}
