import Head from "next/head";
import styles from '../../styles/apoteks.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
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
        <h1>All Users Lists</h1>
        <div>
          {apoteks.map(apotek => (
            <Link href={'apoteks/' + apotek.id} key={apotek.id}  >
              <a className={styles.single}>
                <h3>{apotek.name}</h3>
              </a>
            </Link >
          ))}
        </div>

      </div>
    </>
  );
}

export default index;