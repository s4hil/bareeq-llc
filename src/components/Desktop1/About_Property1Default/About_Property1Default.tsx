import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './About_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    about?: ReactNode;
  };
}
/* @figmaId 224:6498 */
export const About_Property1Default: FC<Props> = memo(function About_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.about != null ? props.text?.about : <div className={classes.about}>About</div>}
    </div>
  );
});
