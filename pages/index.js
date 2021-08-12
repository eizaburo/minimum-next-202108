import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

import Head from 'next/head';

const text = {
  title: "TOP Page",
  description: "Hello Next"
}

const Home = () => {
  return (
    <Layout>
      <h3>TOP Page</h3>
      <p><Link href="/about">Aboutへ</Link></p>
    </Layout>
  );
}

export default Home;