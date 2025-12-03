import {API_URL} from "../components/constants/Constants.js";

export async function searchShows(query) {
  const response = await fetch(
    `${API_URL}${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch shows");
  }

  return response.json(); 
}