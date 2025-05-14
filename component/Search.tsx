import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

const Search = () => {
  return (
    <button className="flex items-center bg-accent px-2 h-10 hover:border hover:border-secondary space-x-4 rounded border border-transparent hover:cursor-pointer transition duration-300 group">
        <SearchIcon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition duration-300"/>
        <p className="text-md px-4 opacity-70 group-hover:opacity-100 transition duration-300">Search Game</p>
        <div className="w-14 py-1 bg-accent rounded flex items-center justify-center border border-background">
            <p className="text-sm opacity-70">Ctrl K</p>
        </div>
    </button>
  )
}
export default Search