"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 18;

const ExplorePage = () => {
  const [results, setResults] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchDeals = async () => {
      const url = `${process.env.NEXT_PUBLIC_API_URL as string}/api/1.0/deals`;
      setLoading(true);

      try {
        const res = await fetch(url);
        const data = await res.json();
        setResults(data);
      } catch (error) {
        setResults([]);
        throw new Error("Error: " + error);
      }
      setLoading(false);
    };
    fetchDeals();
  }, []);

  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const pageItems = results.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1 className="text-3xl mt-10">Explore</h1>
      <div className="flex mt-10">
        {loading ? (
          <Loader className="animate-spin " />
        ) : (
          <div className="flex flex-col justify-between w-full">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {pageItems.map((game, i) => (
                <Link
                  href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                  key={i}
                  className="flex flex-col items-center bg-accent rounded p-4 h-full"
                >
                  <div className="flex items-center justify-center w-full h-36 mb-2 bg-background rounded">
                    <Image
                      src={game.thumb}
                      alt={game.title}
                      width={96}
                      height={144}
                      className="object-contain max-h-36"
                      unoptimized
                    />
                  </div>
                  <h2 className="text-md font-semibold text-white text-center truncate w-full">
                    {game.title}
                  </h2>
                  <p className="text-center w-full">
                    ${game.salePrice}
                  </p>
                </Link>
              ))}
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="my-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage((p) => Math.max(1, p - 1));
                      }}
                      aria-disabled={page === 1}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href="#"
                        isActive={page === i + 1}
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(i + 1);
                        }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  {totalPages > 5 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage((p) => Math.min(totalPages, p + 1));
                      }}
                      aria-disabled={page === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default ExplorePage;
