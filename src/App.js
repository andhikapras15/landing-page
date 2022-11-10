import "./App.css";
import { IoIosArrowDown } from "react-icons/io";
import { Testimoni } from "./components/testimoni";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { Paket } from "./components/paket";

function App() {
  return (
    <div className="App">
      <div className="bg-blue-900 px-16 py-2 text-white flex justify-between">
        <span className="cursor-pointer flex items-center">
          hubungi kami <BsWhatsapp className="mx-3" /> 0823-0823-5050
        </span>
        <span className="cursor-pointer">bantuan</span>
      </div>
      <div className="h-full bg-blue-600 flex px-16">
        <div className="w-3/5 py-3">
          <div className="flex">
            <span className="text-4xl font-extrabold text-white ">
              TRANSVISION
            </span>

            <div className="flex justify-between items-center ml-12 w-64">
              <span className="text-white flex ">
                Produk
                <IoIosArrowDown className="mt-1 ml-1" />
              </span>
              <span className="text-white flex ">
                Promo <IoIosArrowDown className="mt-1 ml-1" />
              </span>
              <span className="text-white flex ">
                Layanan <IoIosArrowDown className="mt-1 ml-1" />
              </span>
            </div>
          </div>
          <div className="h-full">
            <img
              alt="logo"
              src="./transvision.jpeg"
              className="h-96 w-screen mt-28 mb-"
            />
          </div>
        </div>
        <div className="w-2/5 pl-12">
          <p className="text-5xl font-bold text-white mt-20 mb-4">
            Transvision, Pay TV Terbaik Masa Kini
          </p>
          <p className="text-white">
            Hadir dengan total 115 channel dan 50 HD, memiliki semua channel
            pilihan favorit keluarga. Film blockbuster, tayangan anak premium,
            drama korea lengkap, olah raga, hiburan berkualitas pilihan hingga
            channel inhouse dan channel eksklusif
          </p>
          <div className="flex justify-around mt-5">
            <img alt="hd" src="./hd.jpeg" className="w-24 h-20" />
            <img alt="benefit" src="./benefit.jpeg" className="w-24 h-20" />
            <img alt="cs" src="./cs.jpeg" className="w-24 h-20" />
          </div>
        </div>
      </div>
      <div className="bg-blue-600 px-16 py-20">
        <span className="text-white text-4xl font-bold ">Hot Deals !</span>
        <div className="flex justify-around mt-5">
          <Paket />
          <Paket />
          <Paket />
        </div>
      </div>
      <div className="bg-blue-600 px-16 py-20">
        <span className="text-white text-2xl ">
          Kata Mereka Tentang Transvision
        </span>
        <div className="flex justify-around mt-5">
          <Testimoni />
          <Testimoni />
          <Testimoni />
        </div>
      </div>
      <div className="bg-blue-900 px-16 py-10 flex">
        <div>
          <span className="text-white">
            Copyright © 2022 www.transvision.co.id. All Rights Reserved.
          </span>
          <br />
          <span className="text-white">Privacy Policy | Term Of Use</span>
          <br />
          <br />
          <span className="text-white">
            Kontak Kami: Info Berlangganan 082308235050 | Transvision Care
            1500060
          </span>
          <div className="flex mt-2">
            <FaFacebookSquare className="w-6 h-6 mr-1" />
            <FaTwitterSquare className="w-6 h-6 mr-1" />
            <FiInstagram className="w-6 h-6 mr-1" />
            <FaYoutubeSquare className="w-6 h-6 mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
