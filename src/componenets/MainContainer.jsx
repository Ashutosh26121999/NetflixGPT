import {useSelector} from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoDescription from "./VideoDescription";
import {useEffect, useState} from "react";

function MainContainer() {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    // Pick a random movie initially
    setRandomIndex(Math.floor(Math.random() * movies.length));

    // Change the movie every minute
    const interval = setInterval(() => {
      setRandomIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * movies.length);
        } while (newIndex === prevIndex); // Avoid showing the same movie consecutively

        return newIndex;
      });
    }, 5 * 60 * 1000); // 5 minute interval

    return () => clearInterval(interval);
  }, [movies]); // Depend on movies list

  if (!movies || movies.length === 0) return null; // Handle empty state

  const mainShowingMovie = movies[randomIndex]; // ✅ Use the updated random index
  if (!mainShowingMovie) return null;

  const {original_title, overview, id} = mainShowingMovie;

  return (
    <div>
      <VideoBackground movieId={id} />
      <VideoDescription
        title={original_title}
        overview={overview}
        movieId={id}
      />
    </div>
  );
}

export default MainContainer;
