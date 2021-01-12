import React from 'react';
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = props => {
  return (
      <>
        <Backdrop
            show={props.show}
            onClick={props.closed}
        />
        <div
            className="Modal"
            style={{
              transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: props.show ? '1' : '0'
            }}
        >
          <h3 className="ModalTitle">{props.title}</h3>
          <Button parameters={[{label: '\u00d7', type: 'close', clicked: props.closed}]}/>
          <div className="ModalBody">
            {props.children}
          </div>
          <div className="ButtonBlock">
            <Button parameters={props.buttonsBlock}/>
          </div>
        </div>
      </>
  );
};

export default Modal;