import type { Component } from 'solid-js';

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

const unicorns: Unicorn[] = await fetch('https://raw.githubusercontent.com/ben-barbier/unicorn-back-data/master/unicorns.json').then(res => res.json());

const App: Component = () => {
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                { unicorns.map(unicorn =>
                    <div>
                        {unicorn.id}
                        {unicorn.name}
                        {unicorn.birthyear}
                        {unicorn.weight}
                        {unicorn.photo}
                        {unicorn.hobbies}
                        {unicorn.capacities}
                    </div>
                ) }
            </header>
        </div>
    );
};

export default App;
