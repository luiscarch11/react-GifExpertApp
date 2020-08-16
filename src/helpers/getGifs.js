export const getGifs = async (category) => {
  const APIkey = "ShT1Au2Iv7oo9Satjzy8YQaN8cY5WUMa";

  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    APIkey +
    "&q=" +
    encodeURI(category);
  try {
    const resp = await fetch(url);

    const { data } = await resp.json();
    const gifs = data.map((gif) => {
      return { title: gif.title, id: gif.id, url: gif.images.downsized.url };
    });
    return gifs;
  } catch (e) {
    console.log(e);
  }
};
