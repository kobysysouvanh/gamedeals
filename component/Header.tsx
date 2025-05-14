import Search from "./Search"

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center px-4 space-x-6">
        <h1 className="font-semibold text-3xl">GameDeals</h1>
        <Search/>
    </div>
  )
}
export default Header