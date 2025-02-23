import {useTranslation} from "react-i18next";
import {NETFLIX_BACKGROUND} from "../utils/constentValue";
import GPTMoviesSuggesstion from "./GPTMoviesSuggesstion";
import GPTSearchBar from "./GPTSearchBar";
import {useSelector} from "react-redux";

function GPTSearch() {
  const gptSearchResult = useSelector((state) => state?.gpt?.gptSearchResult);
  const {t} = useTranslation();
  return (
    <div>
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
        <img
          src={NETFLIX_BACKGROUND}
          alt={t("netflixBackground")}
          className='w-full h-full object-cover opacity-90'
        />
      </div>
      <GPTSearchBar />
      {gptSearchResult.length > 0 && <GPTMoviesSuggesstion />}
    </div>
  );
}

export default GPTSearch;
