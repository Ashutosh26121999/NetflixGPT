import MovieCard from "./MovieCard";

function EnhancedMovieList({movies}) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-6'>
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          moviePoster={movie?.poster_path}
          movieTitle={movie?.title}
        />
      ))}
    </div>
  );
}
export default EnhancedMovieList;
