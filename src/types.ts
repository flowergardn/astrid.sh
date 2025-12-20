export type BlogInfo = {
  title: string;
  description?: string;
  createdAt: string;
  url: string;
  minutesRead?: string;
  draft?: boolean;
};

export type Post = {
  url: string;
  frontmatter: BlogInfo;
};
