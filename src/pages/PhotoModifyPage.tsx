import { Typography } from '@material-ui/core';
import React from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Page from '../components/layouts/Page';
import PhotoForm from '../components/photoModify/PhotoForm';
import usePhoto from '../hooks/usePhoto';
import usePostMutate from '../hooks/usePostMutate';
import { IPhotoModify } from '../interfaces/photo.interface';
import { RoutePath } from '../utils/enums';

export default function PhotoModifyPage() {
  let { id: photoId } = useParams<{ id: string }>();

  const { photo } = usePhoto(photoId);

  const { goBack, push } = useHistory();

  const { update } = usePostMutate(photoId);

  const initialValues: IPhotoModify = useMemo(() => {
    return {
      albumId: String(photo.albumId),
      title: photo.title,
    };
  }, [photo.albumId, photo.title]);

  const handleCancelForm = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSubmit = useCallback(
    async (values: IPhotoModify) => {
      const result = await update(values);

      alert(result ? 'Success' : 'Failed');

      push(RoutePath.Photos);
    },
    [push, update],
  );

  return (
    <Page>
      <Typography variant="h6" className="mb-4">
        PhotoModifyPage
      </Typography>
      <PhotoForm
        initialValues={initialValues}
        onClose={handleCancelForm}
        onSubmit={handleSubmit}
      />
    </Page>
  );
}
