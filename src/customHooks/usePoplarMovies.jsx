import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addPopularMovies} from "../utils/Redux/moviesSlice";
import {MOVIE_API_OPTION} from "../utils/constentValue";

function usePoplarMovies({pageNum = 1}) {
  // fetch popular palying movies data from api
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?page=${pageNum}`,
        MOVIE_API_OPTION,
      );
      const moviesData = await response.json();
      dispatch(addPopularMovies(moviesData.results));
    } catch (error) {
      console.error("Error In Api call of poplar movies", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, [pageNum]);
  return [loading];
}

export default usePoplarMovies;
