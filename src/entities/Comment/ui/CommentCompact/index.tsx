import React from 'react';

type CommentCompactProps = {
  data: import('@/shared/api').Comment;
};

export const CommentCompact: React.FC<CommentCompactProps> = ({ data }) => {
  return (
    <div>
      <p>User: {data.userId}</p>
      <p>{data.content}</p>
      <p>Post: {data.postId}</p>
    </div>
  );
};
