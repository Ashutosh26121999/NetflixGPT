import {useSelector} from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

function VideoBackground({movieId = "0"}) {
  const [loading] = useMovieTrailer({movieId});
  // fetch movie trailer from RTK
  const {trailerVideo} = useSelector((state) => state?.movies);

  if (loading) {
    return <div>Loading..Movie Trailer...</div>;
  }
  return (
    <div className='w-full aspect-video'>
      <iframe
        className='top-0 left-0 w-full h-full'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        referrerPolicy='strict-origin-when-cross-origin'
        allow='autoplayl; fullscreen'
      ></iframe>
    </div>
  );
}

export default VideoBackground;
