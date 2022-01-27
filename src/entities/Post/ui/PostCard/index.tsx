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
    <article className='relative flex flex-col mb-10 max-w-screen-sm min-w-screen-sm bg-white-100 rounded-lg'>
      <div className='h-14 pl-5 flex items-center justify-between'>
        <Link
          to={`/profile/${data.userName}`}
          className='font-semibold hover:text-secondary-200 z-10'
        >
          {data.userName}
        </Link>
        <Link
          to={`/profile/${data.userName}`}
          className='ml-5 text-sm text-gray-100 hover:text-secondary-200 z-10'
        >
          <time dateTime={data.createdAt}>{data.createdAt}</time>
        </Link>
        <Button className='ml-auto h-full w-16 z-10'>
          <img className='w-5 h-5' src={dots} alt='dots' />
        </Button>
      </div>
      <div className='pl-5 pr-5 pb-5'>
        <h2 className='font-medium text-2xl mb-3'>{data.title}</h2>
        <p className=''>{data.shortDescription}</p>
      </div>
      <img src={data.previewImgUrl} />
      <div className='h-14 pr-3 flex items-center justify-between'>
        <Button className='h-full w-16 hover:bg-secondary-opacity-20 z-10'>
          <img className='w-5 h-5' src={comment} alt='dots' />
        </Button>
        <Button className='h-full w-16 hover:bg-secondary-opacity-20 z-10'>
          <img className='w-6 h-6' src={retweet} alt='dots' />
        </Button>
        <Button className='h-full w-16 hover:bg-secondary-opacity-20 z-10'>
          <img className='w-4 h-4' src={bookmark} alt='dots' />
        </Button>
        <Button className='h-full w-16 mr-auto hover:bg-secondary-opacity-20 z-10'>
          <img className='w-5 h-5' src={share} alt='dots' />
        </Button>
        <Button className='h-8 w-8 hover:bg-secondary-opacity-20 rounded-full z-10'>
          <img className='w-3 h-3 rotate-180' src={arrow} alt='dots' />
        </Button>
        <p className='text-online m-3'>+16</p>
        <Button className='h-8 w-8 hover:bg-secondary-opacity-20 rounded-full z-10'>
          <img className='w-3 h-3' src={arrow} alt='dots' />
        </Button>
      </div>
      <Link
        to={`/news/${data.id}`}
        className='block absolute top-0 left-0 w-full h-full'
      />
    </article>
  );
};
