import Image from "next/image";
import logo from "../../../../public/assets/images/dominos-logo.png";
import Link from "next/link";
export const Header = () => {
  return (
    <>
      <div class="bg-slate-700 text-white flex flex-wrap justify-around">
        <div class="">
          <Image src={logo} width={100} height={100} alt="logo" />
        </div>
        <div class="">
          <Link href="#">Login</Link>| <Link href="#">Register</Link>
        </div>
      </div>
    </>
  );
};
