import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Page from '../components/layouts/Page';
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
    <Page>
      <Typography variant="h6" className="mb-4">
        Photo
      </Typography>
      <div>albumId: {photo.albumId}</div>
      <div>id: {photo.id}</div>
      <div>title: {photo.title}</div>
      <Button color="primary" variant="contained" onClick={handleClickModify}>
        수정
      </Button>
    </Page>
  );
}
