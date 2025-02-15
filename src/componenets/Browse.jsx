import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePoplarMovies from "../customHooks/usePoplarMovies";
import useTopRatedMovie from "../customHooks/useTopRatedMovie";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";

const Browse = () => {
  const [loading] = useNowPlayingMovies({});
  const [loading2] = usePoplarMovies({});
  const [loading3] = useTopRatedMovie({});
  const [loading4] = useUpcomingMovies({});
  if (loading && loading2 && loading3 && loading4) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      {/* 
     MainContiner
      Video BAckground
      Video Title
      Video Description
     
      */}
      <MainContainer />
      {/* 
      Secondry Continer
      Movies List *n
      Cards *n

       */}
      <SecondryContainer />
    </div>
  );
};

export default Browse;
