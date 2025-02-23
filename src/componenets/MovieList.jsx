import MovieCard from "./MovieCard";

// MovieList.jsx
function MovieList({title = null, movies}) {
  return (
    <div className='px-4 md:px-8 lg:px-12 py-'>
      <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-bold mb-4'>
        {title}
      </h2>
      <div className='relative group'>
        {/* Left side gradient fade */}
        <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none z-20' />

        {/* Right side gradient fade */}
        <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/70 to-transparent pointer-events-none z-20' />

        <div className='flex overflow-x-auto pb-4 scrollbar-hide space-x-2 md:space-x-3 lg:space-x-4'>
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              moviePoster={movie?.poster_path}
              movieTitle={movie?.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
