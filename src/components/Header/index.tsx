import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img className={styles.imgstyle} src="/images/jts.png" alt="jt.news"/>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}