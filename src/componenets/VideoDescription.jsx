import useMovieIcon from "../customHooks/useMovieIcon";
import {useSelector} from "react-redux";
import {BASE_IMAGE_URL} from "../utils/constentValue";

function VideoDescription({title, overview, movieId}) {
  const [loading] = useMovieIcon({movieId});
  const {movieIcon} = useSelector((state) => state?.movies);

  return (
    <div className='bg-gradient-to-b from-black to-transparent'>
      <div className='absolute top-[50%] left-6 md:left-24 text-white max-w-2xl'>
        {/* Movie Logo */}
        {movieIcon && (
          <img
            src={`${BASE_IMAGE_URL}${movieIcon}`}
            alt='Movie Logo'
            className='h-24 mb-4'
          />
        )}

        {loading && <h1 className='text-3xl md:text-5xl font-bold'>{title}</h1>}

        <p className='hidden md:block text-lg py-6 text-justify'>{overview}</p>

        {/* Action Buttons */}
        <div className='flex gap-4'>
          <button className='bg-white text-black px-6 md:px-8 py-2 md:py-3 text-lg font-semibold rounded-md hover:bg-opacity-80 transition-all'>
            ▶ Play
          </button>
          <button className='hidden md:inline-block bg-gray-500 text-white px-6 md:px-8 py-2 md:py-3 text-lg font-semibold bg-opacity-50 rounded-md hover:bg-opacity-80 transition-all'>
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoDescription;
