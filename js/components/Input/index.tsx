import React, { FunctionComponent, useState } from 'react';
import { Col, Input, Row } from 'antd';
import InputButton from '../InputButton';
import styles from './input.module.scss';
import { InputProps } from 'antd/lib/input/Input';
import classnames from 'classnames';

interface IInput extends InputProps {
  isButton?: boolean;
  label?: string;
  onClickButton?: React.MouseEventHandler<HTMLElement>;
  tooltip?: string
}

const InputComponent: FunctionComponent<IInput> = ({ isButton, label, className, onClickButton, tooltip, ...props }) => {
  const [focus, setFocus] = useState(false);
  const isError = props['aria-required'] ? !!props['aria-describedby'] : undefined

  return (
    <Row className={styles.root}>
      <Col className={styles['input-wrapper']}>
        {label && (
          <label className={classnames(
            styles.label,
            {
              [styles['disabled']]: props.disabled,
              [styles['focus']]: focus,
              [styles['error']]: !!props['aria-describedby'],
            },
          )}>
            {label}
          </label>
        )}
        <Input
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          suffix={
            <span className={classnames(
              styles['suffix'],
              {
                [styles['valid']]: props['aria-required'],
                [styles['error']]: !!props['aria-describedby']
              },
            )}>
              {props.suffix ? props.suffix : props['aria-required'] ? !!props['aria-describedby'] ? 'Error message' : 'Success message' : undefined}
            </span>
          }
          className={classnames(
            styles['input'],
            { [styles['input_disabled']]: props.disabled },
          )}
        />
      </Col>
      {isButton && (
        <Col className={styles['button-wrapper']}>
          <InputButton
            onClick={onClickButton}
            disabled={props.disabled}
            isError={isError}
            tooltip={tooltip}
            name="trash"
            danger
            className={styles['button']}
          />
        </Col>
      )}
    </Row>
  );
};

export default InputComponent;