import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './FeatherIconStar.module.css';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 0:210 */
export const FeatherIconStar: FC<Props> = memo(function FeatherIconStar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.shape}>
        <ShapeIcon className={classes.icon} />
      </div>
    </div>
  );
});
