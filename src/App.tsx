import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import About from "./components/About";

function App() {
  const items = ["Abu Dhabi", "Al Ain", "Al Ruwais", "Dubai"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertShown, setAlertShown] = useState(true);

  const handleButtonClick = () => {
    console.log("Button has been clicked!");
    setAlertShown(true);
  };

  const onClose = () => {
    setAlertShown(false);
  };

  const getAlert = () => {
    if (alertShown) {
      return <Alert onClose={onClose}>Alert</Alert>;
    }
    return null;
  };

  return (
    <div className="p-4">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
      <hr className="border border-dark border-2" />
      <h2>Alerts</h2>
      <p>Close and reopen alert</p>
      {getAlert()}
      <Button variant="warning" onButtonSelect={handleButtonClick}>
        Button
      </Button>
      <hr className="border border-dark border-2" />
      <About />
    </div>
  );
}

export default App;
