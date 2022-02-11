import { Button, Card, Icon } from '@/shared/components';
import { Link } from '@/shared/components';
import { elapsedTime } from '@/shared/utils';

import styles from './styles.module.scss';

type PostCardProps = {
  data: import('@/shared/api').Post;
};

export const PostCard = ({ data }: PostCardProps) => {
  return (
    <Card>
      <Card.Header>
        <Link className={styles.userLink} to={`/profile/${data.userName}`}>
          {data.userName}
        </Link>
        <Link className={styles.dateLink} to={`/profile/${data.userName}`}>
          <time dateTime={data.createdAt}>{elapsedTime(data.createdAt)}</time>
        </Link>
        <Button icon={<Icon name='dots' size={16} />} />
      </Card.Header>
      <Card.Content>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.shortDescription}</p>
        <img
          className={styles.previewImg}
          loading='lazy'
          src={data.previewImgUrl}
        />
        <Link className={styles.fullLink} to={`/news/${data.id}`} />
      </Card.Content>
      <Card.Footer>
        <Button icon={<Icon name='comment' />} />
        <Button icon={<Icon name='retweet' />} />
        <Button icon={<Icon name='bookmark' />} />
        <Button icon={<Icon name='export' />} />
        <Button
          className={styles.downArrow}
          icon={<Icon name='arrow' size={14} />}
        />
        <p>+16</p>
        <Button icon={<Icon name='arrow' size={14} />} />
      </Card.Footer>
    </Card>
  );
};
