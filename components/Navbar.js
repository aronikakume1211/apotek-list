import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/apotek.png" alt="apoteck" width={128} height={37} />
          </a>
        </Link>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/apoteks'>
        <a>Users</a>
      </Link>

    </nav>
  );
}

export default Navbar;