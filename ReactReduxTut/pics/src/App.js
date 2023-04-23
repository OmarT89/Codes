import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {

  // initialized Pc of state:
  const [images, setImages] = useState([]);

  // define the callback function
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        
        setImages(result);
    
    };

  return (

    // return JSX
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
