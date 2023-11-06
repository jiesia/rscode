import { type FC, useState } from 'react';
import type { IBaseProps } from '@/types';
import { useAsyncEffect } from 'ahooks';
import { invoke } from '@tauri-apps/api/tauri';
import styles from './index.module.css';

interface IProps extends IBaseProps {

}

export const Explorer: FC<IProps> = ({
  className,
  style,
}) => {
  const [fileTree, setFileTree] = useState({});


  useAsyncEffect(async () => {
    const res = await invoke('read_file_tree', { path: '/Users/jess/Code/rscode' });
    console.log(res);
  }, []);

  return (
    <div
      className={`${className} ${styles.container}`}
      style={style}
    >explorer</div>
  );
};
