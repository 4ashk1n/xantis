import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Heat.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle23?: string;
    root?: string;
  };
}
/* @figmaId 0:303 */
export const Heat: FC<Props> = memo(function Heat(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle13}></div>
      <div className={`${props.classes?.rectangle23 || ''} ${classes.rectangle23}`}></div>
    </div>
  );
});
