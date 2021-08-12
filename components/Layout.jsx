import Link from 'next/link';
import { Children } from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <ul>
                    <li><Link href="/">TOP</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>(c) minimum sample</p>
            </footer>
        </div>
    );
}

export default Layout;