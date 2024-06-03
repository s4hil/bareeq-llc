import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Icon } from '../Icon/Icon.js';
import classes from './TabItem_StateSelected.module.css';
import { VuesaxBoldArrowDownIcon2 } from './VuesaxBoldArrowDownIcon2.js';
import { VuesaxBoldArrowDownIcon } from './VuesaxBoldArrowDownIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    icon?: boolean;
    counter?: boolean;
    icon2?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 53:622 */
export const TabItem_StateSelected: FC<Props> = memo(function TabItem_StateSelected(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.icon && (
        <Icon
          swap={{
            vuesaxBoldArrowDown: <VuesaxBoldArrowDownIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Text</div>}
      {!props.hide?.counter && (
        <div className={classes.counter}>
          <div className={classes._10}>10</div>
        </div>
      )}
      {!props.hide?.icon2 && (
        <Icon
          swap={{
            vuesaxBoldArrowDown: <VuesaxBoldArrowDownIcon2 className={classes.icon2} />,
          }}
        />
      )}
    </div>
  );
});
