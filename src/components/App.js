import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        const data = await response.json();
        setImage(data.message);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchData();

  }, []);

  return (
    <div>
      {!image && <p>Loading...</p>}
      {image && <img src={image} alt="A Random Dog" />}
    </div>
  );
}

export default App;

