import Link from "next/link";
import Search from "./Search";


const Header = () => {
  return (
    <div className="w-full h-16 flex items-center px-4 space-x-6 max-w-7xl mx-auto">
      <Link href="/">
        <h1 className="font-semibold text-3xl">GameDeals</h1>
      </Link>
      <Search />
    </div>
  );
};
export default Header;
