import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { id } = useParams();

  return <div>Profile #{id}</div>;
};

export default ProfilePage;
