export interface NASAAPIResponse {
  photos: {
    id: number;
    img_src: string;
    earth_date: string;
    rover: {
      name: string;
    };
    camera: {
      full_name: string;
    };
  }[];
}

export interface MarsPhoto {
  id: number;
  img_src: string;
  earth_date: string;
  rover: string;
  camera: string;
}

export interface PhotoCardProps {
  item: MarsPhoto;
  onPress: () => void;
  style?: object;
}

export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export interface LoadingSpinnerProps {
  size?: "small" | "large";
  color?: string;
}

export type RootStackParamList = {
  MainTabs: undefined;
  List: undefined;
  Grid: undefined;
  PhotoDetail: { photo: MarsPhoto };
};
