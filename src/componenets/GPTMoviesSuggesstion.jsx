import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import EnhancedMovieList from "./EnhancedMovieList";

function GPTMoviesSuggesstion() {
  const gptSearchResult = useSelector((state) => state?.gpt?.gptSearchResult);
  const {t} = useTranslation();

  if (!gptSearchResult) return null;

  return (
    <div className='px-4 py-8 bg-black  h-full overflow-y-scroll'>
      <h2 className='text-white text-2xl md:text-3xl font-bold mb-6 text-center'>
        {t("suggestedMovies")}
      </h2>

      {gptSearchResult.map((movie, index) => (
        <EnhancedMovieList key={index} movies={movie} />
      ))}
    </div>
  );
}

export default GPTMoviesSuggesstion;
