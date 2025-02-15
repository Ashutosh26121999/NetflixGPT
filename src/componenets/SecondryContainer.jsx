import {useSelector} from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const nowPlayingMovies = useSelector(
    (state) => state?.movies?.nowPlayingMovies,
  );
  const popularMovies = useSelector((state) => state?.movies?.popularMovies);
  const topRatedMovies = useSelector((state) => state?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((state) => state?.movies?.upcomingMovies);

  return (
    <div className='bg-black'>
      <div className='relative z-20 -mt-18 md:-mt-72 lg:-mt-76 pt-16 pb-12'>
        <MovieList movies={nowPlayingMovies} className='mb-8' />
        <MovieList title='Popular' movies={popularMovies} className='mb-8' />
        <MovieList title='Top Rated' movies={topRatedMovies} className='mb-8' />
        <MovieList title='Upcoming' movies={upcomingMovies} className='mb-8' />
      </div>
    </div>
  );
}

export default SecondaryContainer;
