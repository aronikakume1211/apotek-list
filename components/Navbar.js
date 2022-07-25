import Link from "next/link";
import Image from "next/image";
import { getPages, getPosts, getJobs } from "../utils/wordpress";
import { useEffect, useState } from "react"

const Navbar = () => {
  const [pages, setPages] = useState([])
  useEffect(() => {
    getPages().then(page => {
      setPages(page)
    })
  }, [])

  // Sort page by ID
  pages.sort((a, b) => {
    return a.id - b.id
  })

  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/apotek.png" alt="apoteck" width={128} height={37} />
          </a>
        </Link>
      </div>
      <div>
        {
          pages.map((page, index) => {
            if (index == 5) {
              return
            } else {
              return (
                <Link href={page.slug == 'home' ? '/' : page.slug} key={index}>
                  <a>{page.title.rendered}</a>
                </Link>
              )
            }
          })
        }
      </div>
    </nav>
  );
}



export default Navbar;