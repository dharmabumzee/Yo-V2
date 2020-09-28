import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const ImageSearch = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    onTermSubmit("milky way");
  }, []);

  const onTermSubmit = async (term) => {
    const { data } = await axios.get(
      `https://images-api.nasa.gov/search?q=${term}`
    );

    setResults(data.collection.items);
  };

  return (
    <div className="image-search">
      <h1>
        <SearchBar onFormSubmit={onTermSubmit} />
      </h1>
      <ImageList results={results} />
    </div>
  );
};

export default ImageSearch;
