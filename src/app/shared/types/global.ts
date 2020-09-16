export interface ActivityOption {
  name: string;
  icon: string;
}

export interface ActivityItem {
  author: string;
  header: ActivityItemHeader;
  content: ActivityItemContent;
}

export interface ActivityItemHeader {
  icon: string;
  meta: string;
  activity: { name: string; icon: string };
}

export interface ActivityItemContent {
  id: number;
  description: string;
  date: string;
}
