import useSWR from 'swr';

import { IPhoto } from '../interfaces/photo.interface';

export default function usePhotos() {
  const { data, error } = useSWR<IPhoto[]>(
    'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10',
  );

  return {
    photos: data!, // suspense.
    isLoading: !error && !data,
    error: error,
  };
}
