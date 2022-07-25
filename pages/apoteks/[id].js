import Head from "next/head";

const url = 'http://localhost:3005/wp-json/wp/v2/jobs';
export const getStaticPaths = async () => {
  const res = await fetch(url);
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
  const res = await fetch(`${url}/${id}`);
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
        <h1> {apotek.acf.job_title}</h1>
        {apotek.acf.familiarity_with}
        <br />
        <p>

          {apotek.acf.job_description}
        </p>
        <br />
        {apotek.acf.required_skills}
      </div>
    </>
  );
}

export default Details;