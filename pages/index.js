import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';

const text = {
  title: "TOP Page",
  description: "Hello Next"
}

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>TOP</title>
      </Head>
      <main>
        <section>
          <h2>Welcome</h2>
          <p>ようそこ。最小Webページへ。</p>
          <img src="https://source.unsplash.com/random/300x300" alt="testimage" />
        </section>
      </main>
    </Layout>
  );
}

export default Home;