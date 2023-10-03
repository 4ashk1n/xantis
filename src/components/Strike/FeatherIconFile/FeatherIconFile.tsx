import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './FeatherIconFile.module.css';
import { ShapeIcon2 } from './ShapeIcon2.js';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 0:103 */
export const FeatherIconFile: FC<Props> = memo(function FeatherIconFile(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.shape}>
        <ShapeIcon className={classes.icon} />
      </div>
      <div className={classes.shape2}>
        <ShapeIcon2 className={classes.icon2} />
      </div>
    </div>
  );
});
