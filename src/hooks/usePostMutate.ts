import { IPhotoModify } from '../interfaces/photo.interface';

export default function usePostMutate(photoId: string) {
  const update = async (data: IPhotoModify) => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${photoId}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            albumId: Number.parseInt(data.albumId),
            title: data.title,
          }),
        },
      );

      return result;
    } catch (error) {}
  };

  return {
    update,
  };
}
