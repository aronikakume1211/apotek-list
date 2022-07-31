import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoadingScreen from '../components/LoadingScreen'

const Layout = ({ children }) => {
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [])
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  })
  return (
    <>
      <div >
        <Navbar />
        {children}
        <Footer />
      </div>
      {/* {
        !Loading ? (
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        ) : (
          <LoadingScreen />

        )
      } */}
    </>
  );
}

export default Layout;