import { getOptions } from "./RequestOptions"

export const getImageJson = () => {
  fetch("https://nazeerholmes.com/images/chaimPics.json", getOptions)
    .then((response) => response.json())
    .then(data => console.log(data))
}