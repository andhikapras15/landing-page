export const Paket = () => {
  return (
    <div className="w-[350px] h-full bg-white rounded-xl py-5 px-3">
      <div className="flex">
        <div className="w-36 h-20 rounded-lg">
          <img alt="paket" src="./paket.jpeg" />
        </div>
        <div className="ml-5 ">
          <span className="text-lg font-semibold">Paket Xstream</span>
          <br />
          <span>Start From</span>
          <br />
          <span className="text-2xl font-bold">Rp 899 Ribu</span>
        </div>
      </div>
      <p className="mt-8">- Streaming Media Player</p>
      <p className="mt-1">- 3 Bulan Free Live TV & VOD</p>
      <button className="bg-blue-600 p-3 font-semibold text-white rounded-xl mt-8 ml-24">
        Beli Sekarang
      </button>
    </div>
  );
};
