const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=7a90f646e8bc9debee71e38dca588197";

const GET = async (type, movieID, ext = "", nPage = "") => {
  const res = await fetch(
    BASE_URL + type + "/" + movieID + API_KEY + ext + nPage
  );
  return await res.json();
};

export { GET };
