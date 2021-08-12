import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
            <h3>About</h3>
            <p><Link href="/">Topへ</Link></p>
        </Layout>
    );
}

export default About;