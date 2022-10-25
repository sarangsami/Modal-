import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

import Modal from "./components/Modal";
import Button from "./components/Button";

import "./App.css";

const modalMachine = createMachine({
  id: "modalMachine",
  initial: "close",
  states: {
    open: {
      on: {
        TOGGLE: "close",
      },
    },
    close: {
      on: {
        TOGGLE: "open",
      },
    },
  },
});

function App() {
  const [current, send] = useMachine(modalMachine);
  return (
    <div className="App">
      <Modal
        show={current.value === "open"}
        headingText="Warning Title"
        footerContent={
          <div className="footer-container">
            <Button className="reject-button">No</Button>
            <Button onClick={() => send("TOGGLE")} className="confirm-button">
              Yes
            </Button>
          </div>
        }
      >
        <div>
          <p>Do you want to close the Modal?</p>
        </div>
      </Modal>
      <Button onClick={() => send("TOGGLE")}>
        {current.matches("open") ? "Close" : "Open"} Modal
      </Button>
    </div>
  );
}

export default App;
