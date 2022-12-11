const apiURL = "https://picsum.photos/v2/list";

export const getImagesList = async (amountOfImages: number) => {
  const response = await fetch(apiURL);
  const payload = await response.json();
  return payload.slice(0, amountOfImages).map(({ url }) => url);
};
