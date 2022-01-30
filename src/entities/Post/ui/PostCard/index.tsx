import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '/assets/icons/arrow.svg';
import bookmark from '/assets/icons/bookmark.svg';
import comment from '/assets/icons/comment.svg';
import dots from '/assets/icons/dots.svg';
import share from '/assets/icons/export.svg';
import retweet from '/assets/icons/retweet.svg';
import { Button } from '@/shared/uiKit';

type PostCardProps = {
  data: import('@/shared/api').Post;
};

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
  return (
    <article className='min-w-screen-sm bg-white-100 relative flex flex-col max-w-screen-sm mb-10 rounded-lg'>
      <div className='h-14 flex items-center justify-between pl-5'>
        <Link
          to={`/profile/${data.userName}`}
          className='hover:text-secondary-200 z-10 font-semibold'
        >
          {data.userName}
        </Link>
        <Link
          to={`/profile/${data.userName}`}
          className='hover:text-secondary-200 z-10 ml-5 text-sm text-gray-100'
        >
          <time dateTime={data.createdAt}>{data.createdAt}</time>
        </Link>
        <Button className='z-10 w-16 h-full ml-auto'>
          <img className='w-5 h-5' src={dots} alt='dots' />
        </Button>
      </div>
      <div className='pb-5 pl-5 pr-5'>
        <h2 className='mb-3 text-2xl font-medium'>{data.title}</h2>
        <p className=''>{data.shortDescription}</p>
      </div>
      <img loading='lazy' src={data.previewImgUrl} />
      <div className='h-14 flex items-center justify-between pr-3'>
        <Button className='hover:bg-secondary-opacity-20 z-10 w-16 h-full'>
          <img className='w-5 h-5' src={comment} alt='dots' />
        </Button>
        <Button className='hover:bg-secondary-opacity-20 z-10 w-16 h-full'>
          <img className='w-6 h-6' src={retweet} alt='dots' />
        </Button>
        <Button className='hover:bg-secondary-opacity-20 z-10 w-16 h-full'>
          <img className='w-4 h-4' src={bookmark} alt='dots' />
        </Button>
        <Button className='hover:bg-secondary-opacity-20 z-10 w-16 h-full mr-auto'>
          <img className='w-5 h-5' src={share} alt='dots' />
        </Button>
        <Button className='hover:bg-secondary-opacity-20 z-10 w-8 h-8 rounded-full'>
          <img className='w-3 h-3 rotate-180' src={arrow} alt='dots' />
        </Button>
        <p className='text-online m-3'>+16</p>
        <Button className='hover:bg-secondary-opacity-20 z-10 w-8 h-8 rounded-full'>
          <img className='w-3 h-3' src={arrow} alt='dots' />
        </Button>
      </div>
      <Link
        to={`/news/${data.id}`}
        className='absolute top-0 left-0 block w-full h-full'
      />
    </article>
  );
};
