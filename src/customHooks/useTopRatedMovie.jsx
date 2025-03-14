import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MOVIE_API_OPTION} from "../utils/constentValue";
import {addTopRatedMovies} from "../utils/Redux/moviesSlice";

function useTopRatedMovie({pageNum = 1}) {
  // fetch top rated  movies data from api
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const topRatedMovies = useSelector((state) => state?.movies?.topRatedMovies);
  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?page=${pageNum}`,
        MOVIE_API_OPTION,
      );
      const moviesData = await response.json();
      dispatch(addTopRatedMovies(moviesData.results));
    } catch (error) {
      console.error("Error In Api call of Top Rated movies", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    topRatedMovies.length === 0 && getMovies();
  }, [pageNum]);
  return [loading];
}

export default useTopRatedMovie;
