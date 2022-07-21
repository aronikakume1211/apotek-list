import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [])
  return (
    <>
      <Head>
        <title>apoteks List | 404</title>
        <meta name='keywords' content='apoteks' />
      </Head>
      <div className="not-found">
        <h1>Ooops.....</h1>
        <h2>The page can not be found!</h2>
        <p>Go to
          <Link href='/'>
            <a>
              Home page
            </a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;