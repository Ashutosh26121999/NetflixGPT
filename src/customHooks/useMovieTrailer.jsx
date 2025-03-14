import {useDispatch, useSelector} from "react-redux";
import {MOVIE_API_OPTION} from "../utils/constentValue";
import {addTrailerVideo} from "../utils/Redux/moviesSlice";
import {useEffect, useState} from "react";

function useMovieTrailer({movieId}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const trailerVideo = useSelector((state) => state?.movies?.trailerVideo);
  const fetchMovieTrailer = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        ` https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        MOVIE_API_OPTION,
      );
      const videosData = await response.json();
      const filteredTrailerData = videosData.results.filter(
        (video) => video.type === "Trailer",
      );
      const finalTrailer = filteredTrailerData.length
        ? filteredTrailerData[0]
        : videosData.results[0];

      dispatch(addTrailerVideo(finalTrailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    trailerVideo.length === 0 && fetchMovieTrailer();
  }, [movieId]);
  return [loading];
}

export default useMovieTrailer;
