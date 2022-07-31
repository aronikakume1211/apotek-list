import Head from "next/head";
import Post from "../components/Post";
import { getPosts } from "../utils/wordpress";
const blog = ({ posts }) => {
  const jsxPosts = posts.map((post) => {
    const featuredMedia = post['_embedded']['wp:featuredmedia'][0]['source_url'];
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  })
  return (
    <>
      <Head>
        <title>apoteks List | Blog</title>
        <meta name='keywords' content='apoteks' />
        <meta name='description' content='Lorem ipsum is placeholder text' />
      </Head>
      <div className="container">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="flex pl-1">
          {jsxPosts}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  }
}

export default blog;