import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MOVIE_API_OPTION} from "../utils/constentValue";
import {addMovieIcon} from "../utils/Redux/moviesSlice";

function useMovieIcon({movieId}) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const movieIcon = useSelector((state) => state?.movies?.movieIcon);
  useEffect(() => {
    const fetchMovieLogo = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/images`,
          MOVIE_API_OPTION,
        );
        const data = await response.json();
        // Filter logos for English only
        const englishLogos = data.logos.filter(
          (logo) => logo.iso_639_1 === "en",
        );

        // Use the first English logo if available
        if (englishLogos.length > 0) {
          dispatch(addMovieIcon(englishLogos[0].file_path));
        } else if (data.logos.length > 0) {
          dispatch(addMovieIcon(data.logos[0].file_path)); // Fallback to any available logo
        }
      } catch (error) {
        console.error("Error fetching movie logo:", error);
      } finally {
        setLoading(false);
      }
    };

    movieIcon.length === 0 && fetchMovieLogo();
  }, [movieId]);
  return [loading];
}

export default useMovieIcon;
