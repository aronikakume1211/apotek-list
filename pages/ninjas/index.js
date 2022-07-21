import Head from "next/head";
import styles from '../../styles/ninjas.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}
const index = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninjas List | Ninjas</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1>All Users Lists</h1>
        <div>
          {ninjas.map(ninja => (
            <Link href={'ninjas/' + ninja.id} key={ninja.id}  >
              <a className={styles.single}>
                <h3>{ninja.name}</h3>
              </a>
            </Link >
          ))}
        </div>

      </div>
    </>
  );
}

export default index;