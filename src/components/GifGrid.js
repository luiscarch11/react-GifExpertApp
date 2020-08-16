import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/userFetchGifs";

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        <img src="./../assets/loading.gif" alt="Loading"></img>
      ) : (
        <div></div>
      )}
      <div className="cardGrid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </div>
    </>
  );
};
