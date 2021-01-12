import React, {useState} from 'react';
import './App.css';
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import Alert from "./components/UI/Alert/Alert";

const App = () => {
  const [modalToggled, setModalToggled] = useState(false);
  const [alertToggled, setAlertToggled] = useState(false);

  const modalShowHandler = () => {
    setModalToggled(true);
  };

  const modalHideHandler = () => {
    setModalToggled(false);
  };

  const alertShowHandler = () => {
    setAlertToggled(true);
  };

  const alertHideHandler = () => {
    setAlertToggled(false);
  };

  return (
      <div className="App">
        <Modal
            title="Modal title"
            show={modalToggled}
            closed={modalHideHandler}
            buttonsBlock={[
              {label: 'Continue', type: 'continue', clicked: (() => {
                  alertShowHandler();
                  modalHideHandler();
                })},
              {label: 'Close', type: 'danger', clicked: (() => modalHideHandler())}
            ]}
        >
          <p>Some random text for modal pop-up</p>
          <a
              href="https://www.instagram.com/screw192/"
              target="_blank"
              rel="noreferrer"
          >
            And a random link
          </a>
        </Modal>
        <Alert
            type="primary"
            show={alertToggled}
            clickDismissable
            dismissHandler={alertHideHandler}
        >
          <p>This is a success alert</p>
        </Alert>
        <Button parameters={[
            {label: 'Show modal', type: 'success', clicked: (() => modalShowHandler())},
            {label: 'Show alert', type: 'success', clicked: (() => alertShowHandler())},
        ]} />
      </div>
  );
}

export default App;
