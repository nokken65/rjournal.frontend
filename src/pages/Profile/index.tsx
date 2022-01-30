import React from 'react';
import { useParams } from 'react-router-dom';

import { postModel } from '@/entities/Post';

const ProfilePage: React.FC = () => {
  const { id } = useParams();
  postModel.posts$.map((post) => console.log(post));

  return <div>Profile #{id}</div>;
};

export default ProfilePage;
