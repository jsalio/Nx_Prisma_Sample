export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
  post?: Post[];
}

export interface Post {
  _id?: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  deleletAt?: Date;
  active: boolean;
  authorId: number;
  Author?: User;
}