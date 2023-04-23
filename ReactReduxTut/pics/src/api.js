import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID OTiE8MnSYOAHBy5UlYO_zhFps1AOGCr2al6dabUm4qQ",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
