import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPages } from "../utils/wordpress";
import { faCoffee, faEnvelope, faEnvelopeSquare, faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = ({ pages }) => {
  const [pageData, setPageData] = useState()
  useEffect(() => {
    pages.map((page, i) => {
      if (page.slug == 'contact-us') {
        setPageData(page)
      }
    })
  }, [pages])
  return (
    <>
      <Head>
        <title>Addis Software | Contact us</title>
        <meta name='keywords' content='apoteks' />
        <meta name='description' content='Lorem ipsum is placeholder text' />
      </Head>
      <div className="container">
        {
          pageData ? (
            <div className="pt-10">
              <h1 dangerouslySetInnerHTML={{ __html: pageData?.title.rendered }} className="text-3xl font-light  uppercase"></h1>
              <p dangerouslySetInnerHTML={{ __html: pageData?.content.rendered }}></p>
              <div className="flex justify-between">
                <div className="flex flex-col w-1/2 pt-6">
                  <label>Name <span className="text-red-700">*</span></label>
                  <input
                    className="form-control border border-stone-600 mt-4 mb-4  p-3 w-3/4"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <label>Email <span className="text-red-700">*</span></label>
                  <input
                    className="form-control border border-stone-600 mt-4 mb-4  p-3 w-3/4"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  <label>Message <span className="text-red-700">*</span></label>
                  <textarea
                    className="form-control border border-stone-600 mt-4 mb-4  p-3 w-3/4"
                    type="text"
                    placeholder="Enter your Message"
                    rows={6}
                  />
                  <button type="submit"
                    className="border-stone-600 mt-4 mb-4 p-4 w-48 bg-red-300 text-white"
                  >
                    Submit
                  </button>

                </div>
                <div className="address flex flex-col w-1/2">
                  <div className="logo-container">
                    <Image
                      src="/logo.png" alt="addis software" width={200} height={200}
                    />
                  </div>

                  <h1 className="uppercase text-3xl font-light mb-6 mt-10">Address</h1>
                  <p className="font-light mb-2">{pageData?.acf.open_hour}</p>
                  <p className="font-light mb-2 text-red-400">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-red-400 mr-2"
                    />
                    {pageData?.acf.address}
                  </p>
                  <p className="font-light mb-2 text-red-400">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-red-400 mr-2"
                    />
                    {pageData?.acf.phone}
                  </p>
                  <a href={`mailto:${pageData?.acf.email}`} className="font-light mb-2 text-red-400">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-red-400 mr-2"
                    />
                    {pageData?.acf.email}
                  </a>
                  {/* <div dangerouslySetInnerHTML={{ __html: pageData?.acf.contact_form }}></div> */}
                </div>
              </div>

            </div>
          ) : (
            <h1>Loading....</h1>
          )
        }

      </div>
    </>
  );
}

export default Contact;


export async function getStaticProps() {
  const pages = await getPages();
  return {
    props: {
      pages
    },
    revalidate: 10, // In seconds
  }
}