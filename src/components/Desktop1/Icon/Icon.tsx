import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Icon.module.css';
import { VuesaxBoldArrowDownIcon } from './VuesaxBoldArrowDownIcon.js';

interface Props {
  className?: string;
  swap?: {
    vuesaxBoldArrowDown?: ReactNode;
  };
}
/* @figmaId 53:609 */
export const Icon: FC<Props> = memo(function Icon(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vuesaxBoldArrowDown}>
        {props.swap?.vuesaxBoldArrowDown || <VuesaxBoldArrowDownIcon className={classes.icon} />}
      </div>
    </div>
  );
});
