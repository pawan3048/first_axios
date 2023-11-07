import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [Images, setImages] = useState([]);

  var getImages = async () => {
    try {
      let resp = await axios.get("https://picsum.photos/v2/list");
      let data = resp.data;
      setImages(data);
    } catch (error) {
      console.log("Error while Fetching...", error);
    }
  };
  return (
    <React.Fragment>
      <button onClick={getImages} className="px-5 py-3 bg-success m-4"><b>Get Images</b></button>
      <hr />
      <h1 style={{ textDecoration: "underline" }}>Image With API</h1>
      <div className="p-4" style={{border:'2px solid', width:'1280px', margin: '0 auto'}}>
        {
          Images.map((elem, i)=>{
            return <img key={i} style={{margin:'5px', display: 'inline-block'}} src={elem.download_url} width={290} height={200}/>
          })
        }
      </div>
    </React.Fragment>
  );
}

export default App;
