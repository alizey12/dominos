import Image from "next/image";
import logo from "../../../../public/assets/images/Main-logo.png";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
export const Header = () => {
  return (
    <>
      <div className="h-20 w-full ">
        <div class="bg-white text-black  grid grid-cols-3 gap-10 ">
          <div class="flex justify-around flex-wrap">
            <Link href="#">
              {" "}
              <div className="flex flex-wrap">
                <Image src={logo} width={50} height={50} alt="logo" />
                <span className="text-blue-900 text-2xl font-bold content-center">
                  Domino&apos;s
                </span>
              </div>{" "}
            </Link>
            {/* <div className="">
          <h1>Delievering to </h1>
          <h1 className="font-bold">please select location</h1>
        </div> */}
          </div>

          <div className="justify-center mx-4 px-5 gap-5 content-center">
            <nav className=" w-full">
              <ul className="flex flex-wrap max-w-full gap-5 font-bold text-lg">
                <Link href="#">
                  <li className="text-md ">MENU</li>
                </Link>
                <Link href="#">
                  <li className="text-md ">DEALS</li>
                </Link>
                <Link href="#">
                  <li className="text-md ">STORES </li>
                </Link>
                <Link href="#">
                  <li className="text-md ">ALLIANCES</li>
                </Link>
              </ul>
            </nav>
          </div>

          <div className=" flex flex-wrap w-96  justify-around">
            <div>
              <BsCart3
                style={{ width: "40px", height: "40px", color: "blue" }}
                className="justify-center m-2 items-center content-center"
              />
            </div>
            <div className="flex flex-wrap justify-around">
              <VscAccount
                style={{ width: "30px", height: "30px" }}
                className="justify-center m-2 items-center content-center"
              />
              <span className="font-bold justify-center items-center content-center">
                My Account
              </span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
