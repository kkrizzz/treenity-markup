import React, { FunctionComponent } from 'react';
import { Button, Tooltip } from 'antd';
import Icon from '../Icon';
import { IconNamesMap } from '../Icon/types';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import styles from './input-button.module.scss';
import classnames from 'classnames';
import { ButtonProps } from 'antd/lib/button/button';

interface IInputButton extends ButtonProps {
  name: IconNamesMap;
  danger?: boolean;
  disabled?: boolean;
  size?: SizeType;
  className?: string;
  isError?: boolean;
  tooltip: string;
}

const InputButton: FunctionComponent<IInputButton> = (
  {
    name,
    danger,
    className,
    size = 'small',
    isError,
    tooltip,
    ...props
  },
) => {

  const content = (
    <Button
      {...props}
      type="primary"
      danger={danger}
      size={size}
      style={{ padding: '4px' }}
      className={classnames(
        styles.root,
        {
          [styles[`danger`]]: danger,
          [styles[`disabled`]]: props.disabled,
          [styles[`tooltip`]]: tooltip,
          [styles[`valid-${isError ? 'error' : 'success'}`]]: isError !== undefined && !tooltip,
        }
        , className,
      )}>
      {tooltip ? (
        <Icon name={tooltip ? 'info' : name} />
      ) : (
        <Icon name={isError === false ? 'success' : !!isError ? 'error' : name} />
      )}

    </Button>
  );

  return (
    tooltip ? (
      <Tooltip title={tooltip}>
        {content}
      </Tooltip>
    ) : content
  );
};

export default InputButton;