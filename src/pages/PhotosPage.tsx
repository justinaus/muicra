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
import { Link } from 'react-router-dom';

import Page from '../components/layouts/Page';
import usePhotos from '../hooks/usePhotos';
import { RoutePath } from '../utils/enums';

export default function PhotosPage() {
  const { photos } = usePhotos();

  return (
    <Page>
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
                <TableCell align="center">
                  <Link to={`${RoutePath.Photos}/${item.id}`}>
                    {item.title}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Page>
  );
}
