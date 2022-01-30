import { list } from '@effector/reflect';
import React from 'react';

import { CommentCompact, commentModel } from '@/entities/Comment';

type LiveCommentsListProps = {
  comment: import('@/shared/api').Comment;
};

const LiveCommentsListView: React.FC<LiveCommentsListProps> = ({ comment }) => {
  return (
    <li className='list-none mt-3 mb-3'>
      <CommentCompact data={comment} />
    </li>
  );
};

export const LiveCommentsList = list({
  view: LiveCommentsListView,
  source: commentModel.comments$,
  mapItem: {
    comment: (comment) => comment,
  },
  getKey: (comment) => comment.id,
});
