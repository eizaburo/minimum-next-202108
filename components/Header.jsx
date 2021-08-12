import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <ul>
                <li><Link href="/">TOP</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </header>
    );
}

export default Header;