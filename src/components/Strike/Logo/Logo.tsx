import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Group2Icon } from './Group2Icon.js';
import classes from './Logo.module.css';

interface Props {
  className?: string;
  classes?: {
    group2?: string;
    root?: string;
  };
  swap?: {
    group2?: ReactNode;
  };
}
/* @figmaId 0:285 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.group2 || ''} ${classes.group2}`}>
        {props.swap?.group2 || <Group2Icon className={classes.icon} />}
      </div>
    </div>
  );
});
