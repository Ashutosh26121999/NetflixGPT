import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MOVIE_API_OPTION} from "../utils/constentValue";
import {addUpcomingMovies} from "../utils/Redux/moviesSlice";

function useUpcomingMovies({pageNum = 1}) {
  // fetch top rated  movies data from api
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const upcomingMovies = useSelector((state) => state?.movies?.upcomingMovies);
  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?page=${pageNum}`,
        MOVIE_API_OPTION,
      );
      const moviesData = await response.json();
      dispatch(addUpcomingMovies(moviesData.results));
    } catch (error) {
      console.error("Error In Api call of Top Rated movies", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    upcomingMovies.length === 0 && getMovies();
  }, [pageNum]);
  return [loading];
}

export default useUpcomingMovies;
