export type Option = {
  id: string;
  label: string;
  icon: string;
  href: string;
};

export type Comment = {
  id: string;
  userId: string;
  postId: string;
  content: string;
};

export type News = {
  id: string;
  userName: string;
  title: string;
  shortDescription: string;
  previewImgUrl: string;
  createdAt: string;
};
