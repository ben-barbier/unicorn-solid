import type {Component} from 'solid-js';

import styles from './App.module.css';

interface Unicorn {
    id: number,
    name: string,
    birthyear: number,
    weight: number,
    photo: string,
    hobbies: string[],
    capacities: number[]
}

const unicorns: Unicorn[] = await fetch('https://raw.githubusercontent.com/ben-barbier/unicorn-back-data/master/unicorns.json')
    .then(res => res.json())
    .then((unicorns: Unicorn[]) => unicorns.map(unicorn => {
        const photo: string = unicorn.photo.split('/').pop() ?? '';
        const photoUrl = photo ? `https://raw.githubusercontent.com/ben-barbier/unicorn-back-nestjs/main/assets/photos/${photo}` : '';
        return {...unicorn, photo: photoUrl};
    }));


const App: Component = () => {
    return (
        <div class={styles.App}>

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
                            <span class="material-icons">more_horiz</span>
                        </button>
                    </div>
                </div>
            </header>

            <div class="drawer w-full rounded" style="height: calc(100vh - 64px);">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    {/*Page content here*/}
                    <div class={styles.Unicorns}>
                        {unicorns.map(unicorn =>
                            <div class="card w-96 bg-base-100 shadow-xl m-2">
                                <figure class="px-10 pt-10">
                                    <img src={unicorn.photo} alt="Photo" class="rounded-xl"/>
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">{unicorn.name}</h2>
                                    <div>{unicorn.id}</div>
                                    <div>{unicorn.birthyear}</div>
                                    <div>{unicorn.weight}</div>
                                    <div>{unicorn.hobbies}</div>
                                    <div>{unicorn.capacities}</div>
                                    <div class="card-actions">
                                        <button class="btn btn-primary"><span class="material-icons">favorite</span></button>
                                        <button class="btn btn-primary"><span class="material-icons">edit</span></button>
                                        <button class="btn btn-primary"><span class="material-icons">visibility</span></button>
                                        <button class="btn btn-warning"><span class="material-icons">delete</span></button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <footer class="items-center p-4 footer bg-neutral text-neutral-content">
                        <div class="items-center grid-flow-col">
                            <img style="height: 36px" src="http://tech-homies.io/tech-homies-logo.631f7001.png" />
                            <p>Copyright © { new Date().getFullYear() } - All right reserved</p>
                        </div>
                        <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <span class="material-icons">school</span>
                        </div>
                    </footer>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/*Sidebar content here */}
                        <li><a>Unicorns list</a></li>
                        <li><a>Admin</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default App;
