import type {Component} from 'solid-js';
import styles from './App.module.css';
import {Unicorn} from "./models/unicorn.model";
import {Header} from "./layout/Header";
import {Footer} from "./layout/Footer";
import {Sidebar} from "./layout/Sidenav";
import {UnicornsList} from "./pages/unicorns-list/UnicornsList";
import {setState, state} from "./store/store";
import {Capacity} from "./models/capacity.model";

fetch('https://raw.githubusercontent.com/ben-barbier/unicorn-back-data/master/unicorns.json')
    .then(res => res.json())
    .then((unicorns: Unicorn[]) => unicorns.map(unicorn => {
        const photo: string = unicorn.photo.split('/').pop() ?? '';
        const photoUrl = `https://raw.githubusercontent.com/ben-barbier/unicorn-back-nestjs/main/assets/photos/${photo}`;
        return {...unicorn, photo: photoUrl};
    }))
    .then((unicorns: Unicorn[]) => setState('unicorns', unicorns));

fetch('https://raw.githubusercontent.com/ben-barbier/unicorn-back-data/master/capacities.json')
    .then(res => res.json())
    .then((capacities: Capacity[]) => setState('capacities', capacities));

const App: Component = () => {
    return (
        <div class={styles.App}>
            <Header/>
            <div class="drawer w-full rounded" style="height: calc(100vh - 64px);">
                <input id="my-drawer" type="checkbox" class="drawer-toggle"/>
                <div class="drawer-content">
                    {/*Page content here*/}
                    <UnicornsList unicorns={state.unicorns as Unicorn[]}/>
                    <Footer/>
                </div>
                <div class="drawer-side">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
};

export default App;
