import React from 'react';
import useSWR from 'swr';

import { IPhoto } from '../interfaces/photo.interface';

export default function PostsPage() {
  const { data, error } = useSWR<IPhoto[]>(
    'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10',
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>PostsPage {data.length}</div>;
}
