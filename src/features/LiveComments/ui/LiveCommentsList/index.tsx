import { list } from '@effector/reflect';
import React from 'react';

import { CommentCompact, commentModel } from '@/entities/Comment';

import styles from './styles.module.scss';

type LiveCommentsListProps = {
  comment: import('@/shared/api').Comment;
};

const LiveCommentsListView: React.FC<LiveCommentsListProps> = ({ comment }) => {
  return (
    <li className={styles.listItem}>
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
