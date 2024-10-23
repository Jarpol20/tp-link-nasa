import { API_KEY } from "../constants/config";
import { ensureHttps } from "../utils/helpers";
import type { MarsPhoto, NASAAPIResponse } from "../types";

const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1";

export const fetchNASAPhotos = async (
  sol = 1000,
  page = 2
): Promise<MarsPhoto[]> => {
  try {
    const url = `${BASE_URL}/rovers/curiosity/photos?sol=${sol}&page=${page}&api_key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as NASAAPIResponse;

    return data.photos.map((photo) => ({
      id: photo.id,
      img_src: ensureHttps(photo.img_src), // Convert image URL to HTTPS
      earth_date: photo.earth_date,
      rover: photo.rover.name,
      camera: photo.camera.full_name,
    }));
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch NASA photos: ${error.message}`);
    }
    throw new Error("Failed to fetch NASA photos");
  }
};
