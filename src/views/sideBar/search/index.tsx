import { type FC } from 'react';
import type { IBaseProps } from '@/types';
import styles from './index.module.css';

interface IProps extends IBaseProps {

}

export const Search: FC<IProps> = ({
  className,
  style,
}) => {
  return (
    <div
      className={`${className} ${styles.container}`}
      style={style}
    >search</div>
  );
};
