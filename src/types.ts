export type BlogInfo = {
  title: string;
  description?: string;
  createdAt: string;
  url: string;
  minutesRead?: string;
  unlisted?: boolean;
};

export type Post = {
  url: string;
  frontmatter: BlogInfo;
};

export type ProjectInfo = {
  title: string;
  description?: string;
  url: string;
  minutesRead?: string;
  unlisted?: boolean;
};

export type Project = {
  url: string;
  frontmatter: ProjectInfo;
};
