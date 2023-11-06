import { type FC, useState } from 'react';
import { colors } from '@/common';
import { activities } from './common';
import styles from './index.module.css';

export const SideBar: FC = () => {
  const [currentActivityId, setCurrentActivityId] = useState(activities[0].id);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.activities}>
          {
            activities.map((activity) => (
              <div
                className={styles.activity}
                onClick={() => setCurrentActivityId(activity.id)}
              >
                {activity.label}
              </div>
            ))
          }
        </div>
        <div>
          <div className={styles.activity}>设置</div>
        </div>
      </div>
      <div className={styles.content}>
        {
          activities.map((activity) => (
            <div
              className={styles.activity_wrapper}
              style={{
                zIndex: activity.id === currentActivityId ? 1 : 0,
                backgroundColor: colors['sideBar.background'],
              }}
            >
              {activity.content}
            </div>
          ))
        }
      </div>
    </div>
  );
};
