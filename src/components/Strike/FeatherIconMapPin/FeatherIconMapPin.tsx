import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './FeatherIconMapPin.module.css';
import { OvalIcon } from './OvalIcon.js';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
  classes?: {
    size?: string;
    root?: string;
  };
  hide?: {
    shape?: boolean;
    oval?: boolean;
    size?: boolean;
  };
}
/* @figmaId 0:3 */
export const FeatherIconMapPin: FC<Props> = memo(function FeatherIconMapPin(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.shape && (
        <div className={classes.shape}>
          <ShapeIcon className={classes.icon} />
        </div>
      )}
      {!props.hide?.oval && (
        <div className={classes.oval}>
          <OvalIcon className={classes.icon2} />
        </div>
      )}
      {!props.hide?.size && null}
    </div>
  );
});
