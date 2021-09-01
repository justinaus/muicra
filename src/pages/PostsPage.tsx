import React from 'react';

import usePosts from '../hooks/usePosts';

export default function PostsPage() {
  const { posts } = usePosts();

  return <div>PostsPage {posts.length}</div>;
}
