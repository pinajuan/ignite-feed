import { PencilLine } from 'phosphor-react';

import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={styles.profile}>
                <Avatar  src="https://github.com/pinajuan.png"/>
                <strong>Juan Pina</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}