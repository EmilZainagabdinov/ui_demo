import React from 'react';
import "./Button.css";

const Button = ({parameters}) => {
  const buttons = parameters.map(btnSpecs => {
    const classes = ['Button', 'Button_' + btnSpecs.type];

    return (
        <button
            key={btnSpecs.label}
            className={classes.join(' ')}
            onClick={btnSpecs.clicked}
        >
          {btnSpecs.label}
        </button>
    )
  });

  return (
      <>
        {buttons}
      </>
  );
};

export default Button;