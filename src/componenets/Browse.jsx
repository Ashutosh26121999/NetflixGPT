import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  const [loading] = useNowPlayingMovies({});
  if (loading) {
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
      {/* <SecondryContainer /> */}
    </div>
  );
};

export default Browse;
