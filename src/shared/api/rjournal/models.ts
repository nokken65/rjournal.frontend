export type Option = {
  id: string;
  label: string;
  iconUrl: string;
  href: string;
};

export type Comment = {
  id: string;
  userId: string;
  postId: string;
  content: string;
};

export type Post = {
  id: string;
  userName: string;
  title: string;
  shortDescription: string;
  previewImgUrl: string;
  createdAt: string;
};
