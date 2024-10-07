import { Footer } from "@/app/components/footer/page";
import { Header } from "@/app/components/header/page";
import { RiEBike2Line } from "react-icons/ri";
import { GiCardPickup } from "react-icons/gi";
import Card from "../../components/cards/page";
export default function Home() {
  return (
    <>
      <div class="min-h-screen bg-slate-900">
        <Header />
        <div className="flex flex-wrap rounded-md justify-center content-center items-center">
          <div className="bg-sky-600 py-2 text-white flex flex-wrap  justify-around w-96 rounded-l-lg h-16 ">
            <RiEBike2Line style={{ width: "40px", height: "40px" }} />
            <h1 className="text-2xl font-bold">Delivery </h1>
          </div>
          <span className="bg-white absolute text-black rounded-full w-10 h-10  items-center content-center font-bold ">
            OR
          </span>
          <div className="bg-red-600  text-white flex flex-wrap  w-96 rounded-r-lg h-16 justify-around items-center content-center place-content-center ">
            <GiCardPickup style={{ width: "40px", height: "40px" }} />
            <h1 className="text-2xl font-bold">Pick Up</h1>
          </div>
        </div>
<Card/>
        
        {/* <Footer /> */}
      </div>
    </>
  );
}
