import { Button } from '@material-ui/core';
import React from 'react';

import usePosts from '../hooks/usePosts';

export default function PostsPage() {
  const { posts } = usePosts();

  return (
    <div>
      PostsPage {posts.length}
      <Button color="primary" variant="contained">
        Hello
      </Button>
    </div>
  );
}
