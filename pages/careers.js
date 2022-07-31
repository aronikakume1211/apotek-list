import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Job from "../components/Job";
import { getJobs, getPage, getPages, getSlugs } from "../utils/wordpress";
const Careers = ({ pages, jobs }) => {
  console.log(pages);
  const [pageData, setPageData] = useState()
  useEffect(() => {
    pages.map((page, i) => {
      if (page.slug == 'careers') {
        setPageData(page)
      }
    })
  }, [])
  return (
    <>
      <Head>
        <title>apoteks List | Careers</title>
        <meta name='keywords' content='apoteks' />
        <meta name='description' content='Lorem ipsum is placeholder text' />
      </Head>
      <div className="container">
        <div className="pt-20 flex items-center ">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-5 ">
              CARRERS AT ADDIS SOFTWARE
            </h1>
            <div dangerouslySetInnerHTML={{ __html: pageData?.content.rendered }} className="mb-10 pb-4"></div>
          </div>
          <div className="flex">
            <div className="careers-logo">
              <Image
                src="/logo.png" alt="addis software" width={200} height={200}
              />
            </div>
          </div>
        </div>
        <div className="jobs mt-10">
          <h1 className="uppercase  text-red-400 font-normal mb-3 text-3xl">Open positions</h1>
          {
            jobs?.map((job) =>
              <Job job={job} key={job.id} />
            )
          }
        </div>
      </div>

    </>
  );
}


export default Careers;
export async function getStaticPaths() {
  const paths = await getSlugs('careers');

  return {
    paths,
    fallback: 'blocking'
  }

}

export async function getStaticProps({ params }) {
  const jobs = await getJobs();
  const pages = await getPages();
  const careers = await getPage(params.slug)
  return {
    props: {
      pages,
      jobs
    },
    // revalidate: 10, // In seconds
  }
}