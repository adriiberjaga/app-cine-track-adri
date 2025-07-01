import { useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import type { Movie } from "../config/types";
import MovieItem from "./MovieItem";
import Heading from "./Heading";
import MovieSkeleton from "./MovieSkeleton";

interface Props {
  movies: Movie[];
  sectionTitle?: string;
  isLoading?: boolean;
}

export default function MovieListScroll(props: Props) {
  const { movies, sectionTitle, isLoading = false } = props;

  // const skeletons = [1, 2, 3, 4, 5, 6]
  const skeletons = Array.from({ length: 6 }, (_, index) => index);

  const [atEnd, setAtEnd] = useState(false);
  const [atBeginning, setAtBeginning] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);

  function checkScrollEnd() {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;
    const isAtBeginning = scrollLeft === 0;
    setAtBeginning(isAtBeginning);
    setAtEnd(isAtEnd);
  }

  function sliderScroll(event: React.MouseEvent<HTMLButtonElement>) {
    if (!sliderRef.current) return;
    const scrollWidth = sliderRef.current.firstElementChild?.scrollWidth || 0;

    sliderRef.current.scrollBy({
      left:
        event.currentTarget.name === "scrollRight" ? scrollWidth : -scrollWidth,
      behavior: "smooth",
    });
  }

  return (
    <section className="relative">
      {sectionTitle && (
        <Heading as="h2" className="mb-4">
          {sectionTitle}
        </Heading>
      )}
      <button
        className="absolute z-10 top-1/2 translate-y-1/2 left-2 disabled:opacity-40"
        type="button"
        onClick={sliderScroll}
        aria-label="Scroll left"
        disabled={atBeginning}
        name="scrollLeft"
      >
        <FaArrowCircleLeft className="text-3xl text-white" />
      </button>

      <div
        className="flex gap-4 relative overflow-x-auto snap-mandatory snap-x *:w-48"
        ref={sliderRef}
        onScroll={checkScrollEnd}
      >
        {isLoading &&
          skeletons.map((_, index) => <MovieSkeleton key={index} />)}
        _
        {!isLoading &&
          movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </div>

      <button
        className="absolute z-10 top-1/2 translate-y-1/2 right-2 disabled:opacity-40"
        type="button"
        onClick={sliderScroll}
        aria-label="Scroll right"
        disabled={atEnd}
        name="scrollRight"
      >
        <FaArrowCircleRight className="text-3xl text-white" />
      </button>
    </section>
  );
}
