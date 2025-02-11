import {useSelector} from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoDescription from "./VideoDescription";

function MainContainer() {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainShowingMovie = movies[0];
  const {original_title, overview, id} = mainShowingMovie;
  return (
    <div>
      <VideoDescription
        title={original_title}
        overview={overview}
        movieId={id}
      />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;
