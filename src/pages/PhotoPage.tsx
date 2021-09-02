import { Button } from '@material-ui/core';
import React from 'react';
import { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import usePhoto from '../hooks/usePhoto';
import { RoutePath } from '../utils/enums';

export default function PhotoPage() {
  let { id: photoId } = useParams<{ id: string }>();

  const { photo } = usePhoto(photoId);

  const { push } = useHistory();

  const handleClickModify = useCallback(() => {
    push(`${RoutePath.PhotoModify}/${photoId}`);
  }, [photoId, push]);

  return (
    <div>
      <div>albumId: {photo.albumId}</div>
      <div>id: {photo.id}</div>
      <div>title: {photo.title}</div>
      <Button color="primary" variant="contained" onClick={handleClickModify}>
        수정
      </Button>
    </div>
  );
}
