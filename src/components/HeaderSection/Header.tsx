import Image from "next/image";
import Link from "next/link";
import Date from "./Date";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <Image src="" alt="বাজার দর"></Image>
        </div>
        <div>
          <h1>বাজার দর</h1>
          <Date />
        </div>
      </div>
      <div>
        <Link className="btn" href="#">
          সাইন ইন
        </Link>
        <Link className="btn" href="#">
          সাইন আপ করুন
        </Link>
      </div>
    </div>
  );
};

export default Header;
