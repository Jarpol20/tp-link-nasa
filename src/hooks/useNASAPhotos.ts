import { useQuery } from "@tanstack/react-query";
import { fetchNASAPhotos } from "../services/api";
import type { MarsPhoto } from "../types";

export const useNASAPhotos = () => {
  return useQuery<MarsPhoto[], Error>({
    queryKey: ["nasaPhotos"],
    queryFn: () => fetchNASAPhotos(),
    retry: (failureCount, error) => {
      // Only retry network-related errors
      if (
        error.message.includes("Network") ||
        error.message.includes("timeout")
      ) {
        return failureCount < 3;
      }
      return false;
    },
  });
};
