import React from 'react';
import "./Alert.css";
import Button from "../Button/Button";

const Alert = props => {
  const alertClass = ['CustomAlert', 'CustomAlert_' + props.type];
  let dismissBodyClick = null;
  let closeBtn = null;

  if (props.clickDismissable) {
    dismissBodyClick = props.dismissHandler;
  } else {
    closeBtn = (
        <Button parameters={[{label: '\u00d7', type: 'close', clicked: props.dismissHandler}]}/>
    );
  }

  return (
      <>
        <div
            onClick={dismissBodyClick}
            className={alertClass.join(' ')}
            style={{
              transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: props.show ? '1' : '0'
            }}
        >
          {closeBtn}
          {props.children}
        </div>
      </>
  );
};

export default Alert;