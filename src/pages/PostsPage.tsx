import { Button } from '@material-ui/core';
import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

import Page from '../components/layouts/Page';
import { IRadio } from '../components/shared/radio/radio.interface';
import RadioFormControl from '../components/shared/radio/RadioFormControl';
import usePosts from '../hooks/usePosts';

const RADIO_DATAS: IRadio[] = [
  { id: 'albumId' },
  { id: 'id' },
  { id: 'title', disabled: true },
];

export default function PostsPage() {
  const [currentId, setCurrentId] = useState('id');

  const { posts } = usePosts();

  const handleChangeRadio = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setCurrentId(value);
    },
    [],
  );

  return (
    <Page>
      PostsPage {posts.length}
      <Button color="primary" variant="contained" className="w-96">
        Hello
      </Button>
      <p className="text-lg font-semibold">122331</p>
      <RadioFormControl
        label="Test"
        datas={RADIO_DATAS}
        selectedId={currentId}
        onChangeRadio={handleChangeRadio}
      />
    </Page>
  );
}
