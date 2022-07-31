import Link from "next/link";
import Image from "next/image";
import { getPages, getPosts, getJobs, getMenus } from "../utils/wordpress";
import { useEffect, useState } from "react"



export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      setScroll(scrollCheck);
    }
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [scroll, setScroll]);
  return scroll
}
const Navbar = () => {
  const [menus, setMenus] = useState([]);
  const scroll = useScrollHandler();

  useEffect(() => {
    getMenus().then(menus => {
      setMenus(menus)
    })
  }, [])

  return (
    <nav className={scroll ? 'sticky' : ''}>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/ADDISSOFTWARE.png" alt="apoteck" width={148} height={17} />
          </a>
        </Link>
      </div>
      <div>
        {
          menus?.map((menu, index) => {

            const subPage = menu?.url.split('/');
            return (
              <Link href={subPage[3] ? subPage[3] : '/'} key={index}>
                <a className="capitalize text-slate-700" >{menu?.title}</a>
              </Link>
            )

          })
        }
      </div>
    </nav>
  );
}

export default Navbar;