import Link from 'next/link';
import { Children } from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div id="root">
            <Nav />
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;