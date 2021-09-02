import { Button } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

import usePhoto from '../hooks/usePhoto';

export default function PhotoPage() {
  let { id: photoId } = useParams<{ id: string }>();

  const { photo } = usePhoto(photoId);

  return (
    <div>
      <div>albumId: {photo.albumId}</div>
      <div>id: {photo.id}</div>
      <div>title: {photo.title}</div>
      <Button color="primary" variant="contained">
        수정
      </Button>
    </div>
  );
}
