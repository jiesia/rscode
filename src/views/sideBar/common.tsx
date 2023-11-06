import { Explorer } from './explorer';
import { Search } from './search';

export const activities = [
  {
    id: 1,
    label: '文件',
    content: <Explorer />,
  },
  {
    id: 2,
    label: '搜索',
    content: <Search />,
  }
];
