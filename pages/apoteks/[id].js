import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map(apotek => {
    return {
      params: { id: apotek.id.toString() }
    }

  })

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  return {
    props: { apotek: data }
  }
}

const Details = ({ apotek }) => {
  return (
    <>
      <Head>
        <title>apoteks List | Details</title>
        <meta name='keywords' content='apoteks' />
        <meta name='description' content='Lorem ipsum is placeholder text' />
      </Head>
      <div>
        <h1>{apotek.name}</h1>
        <p>{apotek.email}</p>
        <p>{apotek.website}</p>
        <p>{apotek.address.city}</p>
      </div>
    </>
  );
}

export default Details;