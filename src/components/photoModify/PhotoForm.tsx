import { Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { IPhotoModify } from '../../interfaces/photo.interface';

const schema = Yup.object().shape({
  albumId: Yup.string().required('필수 값 입니다.'),
  title: Yup.string().required('필수 값 입니다.'),
});

interface Props {
  initialValues?: IPhotoModify;
  onClose: () => void;
  onSubmit: (values: IPhotoModify) => void;
}

export default function PhotoForm({ initialValues, onClose, onSubmit }: Props) {
  const formik = useFormik<IPhotoModify>({
    initialValues: {
      albumId: initialValues?.albumId || '',
      title: initialValues?.title || '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <Box component={Paper} padding={4}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            required
            name="albumId"
            value={values.albumId}
            onChange={handleChange}
            label="albumId"
            inputProps={{ maxLength: 10 }}
            fullWidth
            error={!!errors.albumId && touched.albumId}
            helperText={touched.albumId && errors.albumId}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            name="title"
            value={values.title}
            onChange={handleChange}
            label="title"
            fullWidth
            error={!!errors.title && touched.title}
            helperText={touched.title && errors.title}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} className="mt-8">
        <Grid item>
          <Button variant="contained" color="secondary" onClick={onClose}>
            취소
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSubmit()}
          >
            수정
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
