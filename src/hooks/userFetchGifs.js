import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [object, setobject] = useState({ loading: true, data: [] });
  useEffect(() => {
    getGifs(category).then((imgs) => setobject({ loading: false, data: imgs }));
  }, [category]);
  console.log(object);
  return object;
  //     useEffect(() => {
  //     getGifs(category).then((imgs) => setImages(imgs));
  //   }, [category]);}
};
