export const DEFULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const NETFLIX_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg";
export const MY_GITHUB_IMAGE =
  "https://avatars.githubusercontent.com/u/40879118?v=4";
export const MOVIE_API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};
export const TMDB_API_KEY = "2756e52dafe133747147c6116cf9ea6d";
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";
export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w780";
export const LANGUAGES = [
  {label: "English", code: "en"},
  {label: "Hindi", code: "hi"},
  {label: "Polish", code: "pl"},
  {label: "German", code: "de"},
  {label: "French", code: "fr"},
];
export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
export const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
