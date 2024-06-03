import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './PrivacyPolicy_Property1Default.module.css';

interface Props {
  className?: string;
  text?: {
    privacyPolicy?: ReactNode;
  };
}
/* @figmaId 221:6473 */
export const PrivacyPolicy_Property1Default: FC<Props> = memo(function PrivacyPolicy_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.privacyPolicy != null ? (
        props.text?.privacyPolicy
      ) : (
        <div className={classes.privacyPolicy}>Privacy Policy</div>
      )}
    </div>
  );
});
