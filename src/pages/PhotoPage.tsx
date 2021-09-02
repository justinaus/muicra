import React from 'react';
import { useParams } from 'react-router-dom';

export default function PhotoPage() {
  let { id: photoId } = useParams<{ id: string }>();

  console.log(111, photoId);

  return <div>PhotoPage</div>;
}
