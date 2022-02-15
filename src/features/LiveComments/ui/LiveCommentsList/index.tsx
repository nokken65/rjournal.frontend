import { list } from '@effector/reflect';
import React from 'react';

import { CommentCompact, commentModel } from '@/entities/Comment';
import { List } from '@/shared/components';

type LiveCommentsItemProps = {
  comment: import('@/shared/api').Comment;
};

const LiveCommentsListView: React.FC<LiveCommentsItemProps> = ({ comment }) => {
  return (
    <List.Item>
      <CommentCompact data={comment} />
    </List.Item>
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
