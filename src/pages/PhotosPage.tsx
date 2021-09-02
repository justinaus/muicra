import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';

import usePhotos from '../hooks/usePhotos';

export default function PhotosPage() {
  const { photos } = usePhotos();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Album ID</TableCell>
            <TableCell align="center">Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {photos.map((item) => (
            <TableRow key={item.id} hover>
              <TableCell align="center">{item.id}</TableCell>
              <TableCell align="center">{item.albumId}</TableCell>
              <TableCell align="center">{item.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
