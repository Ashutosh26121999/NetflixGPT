import {useDispatch, useSelector} from "react-redux";
import {MOVIE_API_OPTION} from "../utils/constentValue";
import {addNowPlayingMovies} from "../utils/Redux/moviesSlice";
import {useEffect, useState} from "react";

function useNowPlayingMovies({pageNum = 1}) {
  // fetch now palying movies data from api
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const nowPlayingMovies = useSelector(
    (state) => state?.movies?.nowPlayingMovies,
  );
  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?page=${pageNum}`,
        MOVIE_API_OPTION,
      );
      const moviesData = await response.json();
      dispatch(addNowPlayingMovies(moviesData.results));
    } catch (error) {
      console.error("Error In Api call of now playing movies", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    nowPlayingMovies.length === 0 && getMovies();
  }, [pageNum]);
  return [loading];
}

export default useNowPlayingMovies;
