import React from 'react';
import { Link } from 'react-router-dom';

type PostCardProps = {
  data: import('@/shared/api').Post;
};

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
  return (
    <article className='relative mb-10 flex flex-col'>
      <div className='flex h-14 items-center justify-between pl-5'>
        <Link
          to={`/profile/${data.userName}`}
          className='z-10 font-semibold hover:text-secondary-200'
        >
          {data.userName}
        </Link>
        <Link
          to={`/profile/${data.userName}`}
          className='z-10 ml-5 text-sm text-gray-100 hover:text-secondary-200'
        >
          <time dateTime={data.createdAt}>{data.createdAt}</time>
        </Link>
        {/* <Button className='z-10 ml-auto h-full w-16'>
            <img className='h-5 w-5' src={dots} alt='dots' />
          </Button> */}
      </div>
      <div className='pb-5 pl-5 pr-5'>
        <h2 className='mb-3 text-2xl font-medium'>{data.title}</h2>
        <p className=''>{data.shortDescription}</p>
      </div>
      <img loading='lazy' src={data.previewImgUrl} />
      <div className='flex h-14 items-center justify-between pr-3'>
        {/* <Button className='z-10 h-full w-16 hover:bg-secondary-opacity-20'>
            <img className='h-5 w-5' src={comment} alt='dots' />
          </Button>
          <Button className='z-10 h-full w-16 hover:bg-secondary-opacity-20'>
            <img className='h-6 w-6' src={retweet} alt='dots' />
          </Button>
          <Button className='z-10 h-full w-16 hover:bg-secondary-opacity-20'>
            <img className='h-4 w-4' src={bookmark} alt='dots' />
          </Button>
          <Button className='z-10 mr-auto h-full w-16 hover:bg-secondary-opacity-20'>
            <img className='h-5 w-5' src={share} alt='dots' />
          </Button>
          <Button className='z-10 h-8 w-8 rounded-full hover:bg-secondary-opacity-20'>
            <img className='h-3 w-3 rotate-180' src={arrow} alt='dots' />
          </Button>
          <p className='m-3 text-online'>+16</p>
          <Button className='z-10 h-8 w-8 rounded-full hover:bg-secondary-opacity-20'>
            <img className='h-3 w-3' src={arrow} alt='dots' />
          </Button> */}
      </div>
      <Link
        to={`/news/${data.id}`}
        className='absolute top-0 left-0 block h-full w-full'
      />
    </article>
  );
};
