import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around bg-blue-600 text-white">
        <div className="">
          <h1 className="text-3xl font-bold">About Domino&rsquo;s</h1>
          <ul className="flex flex-wrap flex-col justify-between">
            <Link href="#">
              <li className="">About Us</li>
            </Link>
            <Link href="#">
              <li className="">Our Vision, Purpose and Values</li>
            </Link>
            <Link href="#">
              <li className="">Allergens & Nutrition</li>
            </Link>
            <Link href="#">
              <li className="">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div class="">
          <h1 class="text-3xl font-bold">Corporate</h1>
        </div>
        <div class="">
          <h1 class="text-3xl font-bold">Follow Us</h1>
        </div>
      </div>
    </>
  );
};
