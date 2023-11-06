import { type FC } from 'react';
import { StatusBar, SideBar, BottomBar, EditorTabs } from './views';
import styles from './App.module.css';

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <SideBar />
        <div className={styles.editor}>
          <EditorTabs />
          <BottomBar />
        </div>
      </div>
      <StatusBar />
    </div>
  );
};
