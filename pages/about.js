import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPages } from "../utils/wordpress";
const About = ({ pages }) => {
  const [pageData, setPageData] = useState()
  useEffect(() => {
    pages.map((page, i) => {
      if (page.slug == 'about') {
        setPageData({ ...page })
      }
    })
  }, [pages])
  return (
    <>
      <Head>
        <title>apoteks List | About</title>
        <meta name='keywords' content='apoteks' />
        <meta name='description' content='Lorem ipsum is placeholder text' />
      </Head>
      <div className="container  p-20 justify-center items-center flex">
        <div className="logo-container w-2/3">
          <Image
            src="/logo.png" alt="addis software" width={200} height={200}
          />
        </div>
        <div className="about-paragraph">
          <h1 className="text-3xl font-light mb-4">About Us</h1>
          <div dangerouslySetInnerHTML={{ __html: pageData?.content.rendered }} className="pb-4"></div>
        </div>
      </div>
    </>
  );
}

export default About;

export async function getStaticProps() {
  const pages = await getPages();
  return {
    props: {
      pages
    },
    revalidate: 10, // In seconds
  }
}