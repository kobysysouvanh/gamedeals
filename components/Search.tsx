"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Delete, Loader, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<SearchedGame[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchSearchResults = async () => {
    setLoading(true);
    setResults([]);
    setHasSearched(true);

    const url = `${
      process.env.NEXT_PUBLIC_API_URL as string
    }/api/1.0/games?title=${value}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      setResults([]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      fetchSearchResults();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          setValue("");
          setHasSearched(false)
        }
      }}
    >
      <DialogTrigger asChild>
        <button className="flex items-center bg-accent px-2 h-10 hover:border hover:border-secondary space-x-4 rounded border border-transparent hover:cursor-pointer transition duration-300 group">
          <SearchIcon className="size-5 opacity-70 group-hover:opacity-100 transition duration-300" />
          <p className="text-md px-4 opacity-70 group-hover:opacity-100 transition duration-300 truncate">
            Search Game
          </p>
          <div className="w-14 py-1 bg-accent rounded flex items-center justify-center border border-background">
            <p className="text-sm opacity-70">Ctrl+K</p>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="sr-only">
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="flex items-center rounded border px-3 py-3 space-x-2 mt-4 ">
          <SearchIcon className="size-5" />
          <input
            type="text"
            placeholder="Search Game..."
            className="flex-1 outline-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Delete
            className={`size-5 transition-opacity ${
              value
                ? "opacity-100 cursor-pointer hover:opacity-80"
                : "opacity-70 cursor-default"
            }`}
            onClick={() => value && setValue("")}
          />
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center">
            <div className="rounded bg-accent px-2 py-1 mr-2">esc</div> to close
          </div>
          <div className="flex items-center">
            <div className="rounded bg-accent px-2 py-1 mr-2">enter</div> to
            search
          </div>
        </div>
        {/* Display Search Results */}
        {hasSearched && (
          <div className="overflow-y-scroll h-[calc(100vh-300px)] sm:h-[calc(100vh-500px)] lg:h-[calc(100vh-600px)]">
            {loading ? (
              <Loader className="animate-spin mx-auto" />
            ) : results.length > 0 ? (
              <ul>
                {results.map((game, index) => (
                  <li key={index}>
                    <Link 
                    href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="py-2  flex items-center space-x-3"
                    >
                      <Image
                        src={game.thumb}
                        alt={game.external}
                        width={96} // 24 * 4 = 96px
                        height={96}
                        className="rounded object-contain"
                        style={{ width: 96, height: 96 }}
                        unoptimized
                      />
                      <div className="flex flex-col space-y-1">
                        <span className="text-foreground">{game.external}</span>
                        <span className="text-foreground">
                          ${game.cheapest}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              value && <div className="text-center">No results found.</div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default Search;
