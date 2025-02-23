import {useTranslation} from "react-i18next";
import openai from "../utils/openai";
import {useRef, useState} from "react";
import {MOVIE_API_OPTION} from "../utils/constentValue";
import {useDispatch} from "react-redux";
import {setGPTSearchResult} from "../utils/Redux/gptSlice";

function GPTSearchBar() {
  const {t} = useTranslation();
  const inputValueRef = useRef("");
  const [gptResult, setGptResult] = useState([
    "Andaz Apna Apna",
    "Hera Pheri",
    "Gol Maal",
    "Chashme Buddoor",
    "Padosan",
    "Sholay",
    "Amar Akbar Anthony",
    "Chalti Ka Naam Gaadi",
    "Jaane Bhi Do Yaaro",
    "Aankhen",
  ]);
  const dispatch = useDispatch();
  const fetchMovieDetails = async (movieName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
        MOVIE_API_OPTION,
      );
      const data = await response.json();
      // set data in gpt store
      if (data?.results?.length > 0) {
        return data.results;
      }
    } catch (error) {
      console.error("Error fetching movie Details:", error);
    }
  };
  const getMoviesDetailsOfGptResult = async () => {
    const promisesArray = gptResult.map((movieName) => {
      return fetchMovieDetails(movieName);
    });
    const responses = await Promise.all(promisesArray);
    console.log("responses-Movies Details-->", responses);
    dispatch(setGPTSearchResult(responses));
  };
  // function to call GPT API
  const handleSearchOnGPT = async () => {
    try {
      const enteredValue = inputValueRef.current.value;
      console.log("enteredValue-->", enteredValue);
      const gptInhancedPropmtMsg =
        "Act as a Movie Recommended System and answer the query:" +
        enteredValue +
        ": and give 10 movie names in array format like example: [movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9,movie10]";
      console.log("gptInhancedPropmtMsg-->", gptInhancedPropmtMsg);
      const gptResponse = await openai.chat.completions.create({
        messages: [{role: "user", content: gptInhancedPropmtMsg}],
        model: "gpt-3.5-turbo",
      });
      console.log("GPT Response---0-->", gptResponse);
      console.log(
        "GPT Response---1-->",
        gptResponse.choices[0].message.content,
      );
      setGptResult(gptResponse.choices[0].message.content);
      // getMoviesDetailsOfGptResult(); // final call of this function
    } catch (error) {
      console.error("Error calling GPT API", error);
    } finally {
      // ! temproray call of thi sfunction in this block
      getMoviesDetailsOfGptResult();
    }
  };
  return (
    <div className='flex justify-center items-center h-20 px-4 my-50'>
      {/* Search bar and button for GPT Search */}
      <form
        className='flex w-full max-w-2xl bg-whiterounded-2xl'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type='text'
          placeholder={inputValueRef.current.value ?? t("serchBarPlaceHolder")}
          className='w-full bg-black text-white border  rounded-l-md px-4 py-3 focus:outline-none placeholder-white'
          ref={inputValueRef}
        />
        <button
          type='submit'
          className='bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-r-md transition duration-300'
          onClick={handleSearchOnGPT}
        >
          {t("search")}
        </button>
      </form>
    </div>
  );
}

export default GPTSearchBar;
