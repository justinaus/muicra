import React from 'react';
import { useParams } from 'react-router-dom';

import usePhoto from '../hooks/usePhoto';

export default function PhotoModifyPage() {
  let { id: photoId } = useParams<{ id: string }>();

  const { photo } = usePhoto(photoId);

  console.log(111, photo);

  return <div>PhotoModifyPage</div>;
}
