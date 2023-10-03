import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './FeatherIconShoppingCart.module.css';
import { OvalIcon2 } from './OvalIcon2.js';
import { OvalIcon } from './OvalIcon.js';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 0:192 */
export const FeatherIconShoppingCart: FC<Props> = memo(function FeatherIconShoppingCart(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.oval}>
        <OvalIcon className={classes.icon} />
      </div>
      <div className={classes.oval2}>
        <OvalIcon2 className={classes.icon2} />
      </div>
      <div className={classes.shape}>
        <ShapeIcon className={classes.icon3} />
      </div>
    </div>
  );
});
