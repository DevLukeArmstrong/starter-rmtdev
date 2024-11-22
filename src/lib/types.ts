export type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
};

export type JobItemExpanded = JobItem & {
  description: string;
  companyURL: string;
  coverImgURL: string;
  duration: string;
  salary: string;
  location: string;
  qualifications: string[];
  reviews: string[];
};
