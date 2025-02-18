import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePoplarMovies from "../customHooks/usePoplarMovies";
import useTopRatedMovie from "../customHooks/useTopRatedMovie";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const Browse = () => {
  const [loading] = useNowPlayingMovies({});
  const [loading2] = usePoplarMovies({});
  const [loading3] = useTopRatedMovie({});
  const [loading4] = useUpcomingMovies({});
  const showGPTSearch = useSelector((state) => state?.gpt?.showGPTSearch);
  const {t} = useTranslation();
  if (loading && loading2 && loading3 && loading4) {
    return <div>{t("loading")}</div>;
  }
  return (
    <div>
      <Header />
      {/* GPT Search Componenet */}
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
