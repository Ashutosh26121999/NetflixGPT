// MovieCard.jsx
import {MOVIE_POSTER_URL} from "../utils/constentValue";

function MovieCard({moviePoster, movieTitle}) {
  return (
    <div className='min-w-[150px] md:min-w-[180px] lg:min-w-[220px] relative transform transition-transform duration-300 ease-in-out hover:scale-125 hover:z-20 group'>
      <div className='rounded-lg overflow-hidden shadow-xl hover:shadow-2xl'>
        <img
          src={
            moviePoster
              ? `${MOVIE_POSTER_URL}${moviePoster}`
              : "/placeholder-movie.jpg" // Add a placeholder image
          }
          alt={movieTitle || "Movie poster"}
          className='w-full h-auto aspect-[2/3] object-cover'
          loading='lazy'
        />
      </div>

      {/* Hover info overlay */}
      <div className='absolute inset-0 bg-black bg-o text-wrappacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-end p-2 opacity-0 group-hover:opacity-50'>
        <h2 className='text-white text-lg font-bold truncate text-wrap hover:whitespace-normal hover:text-white'>
          {movieTitle}
        </h2>
      </div>
    </div>
  );
}

export default MovieCard;
