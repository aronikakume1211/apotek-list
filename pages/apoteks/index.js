import Head from "next/head";
import styles from '../../styles/apoteks.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
  const url = 'http://localhost:3005/wp-json/wp/v2/jobs';
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const data = await res.json();
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { apoteks: data }
  }
}

const index = ({ apoteks }) => {
  return (
    <>
      <Head>
        <title>apoteks List | apoteks</title>
        <meta name='keywords' content='apoteks' />
        <meta name='description' content='Lorem ipsum is placeholder text' />
      </Head>
      <div>
        <h1>Job Lists</h1>
        <div>
          {apoteks.map(apotek => (
            <Link href={'apoteks/' + apotek.id} key={apotek.id}  >
              <a className={styles.single}>
                <h3>{apotek.title.rendered}</h3>
              </a>
            </Link >
          ))}
        </div>

      </div>
    </>
  );
}

export default index;