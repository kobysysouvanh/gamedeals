export default function Home() {
  return (
    <div className="w-full  flex items-center justify-center px-10">
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-white">GameDeals</h1>
          <p className="py-4">
            Unlock massive savings on PC games. We use the CheapShark API to
            scan the internet for the lowest prices and hottest deals. Find your
            next favorite game for less, guaranteed.
          </p>
          <button className="bg-secondary w-40 text-background text-lg py-1 rounded hover:cursor-pointer">Find Deals</button>
        </div>
        <div className="w-1/2">

        </div>
      </div>
    </div>
  );
}
