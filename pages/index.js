import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getJobs, getPosts } from '../utils/wordpress';

import Post from '../components/Post';
import Job from '../components/Job';

export default function Home({ posts, jobs }) {
  const jsxPosts = posts.map((post) => {
    const featuredMedia = post['_embedded']['wp:featuredmedia'][0]['source_url'];
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  })
  // console.log('Jobs', jobs);
  const jsxJobs = jobs.map((job) => {
    return <Job job={job} key={job.id} />;
  })
  return (
    <>
      <Head>
        <title>apoteks List | Home</title>
        <meta name='keywords' content='apoteks' />
        <meta name='description' content='Lorem ipsum is placeholder text' />
      </Head>
      <div className="container pt-5">
        <h1 className="text-center pb-5">Tech Blog</h1>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="pb-3">Our blog posts</h2>
            {jsxPosts}
          </div>
          <div className="col-lg-4">
            <h2 className="pb-3">Jobs</h2>
            {jsxJobs}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const jobs = await getJobs();
  return {
    props: {
      posts,
      jobs,
    },
    revalidate: 10, // In seconds
  }
}
