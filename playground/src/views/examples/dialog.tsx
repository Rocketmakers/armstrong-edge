
import {
  TextInput,
  Button,
  useDialog,
  useInterval,
  Modal,
} from "@rocketmakers/armstrong-edge";
import * as React from "react";

export const DialogExample: React.FC = () => {
  const [openDialog] = useDialog<string, { test: string }>(
    ({ resolve, argument }) => {
      const [val, setVal] = React.useState("");

      return (
        <>
          <TextInput
            onChange={(e) => setVal(e.currentTarget.value)}
            value={val}
          />
          <Button onClick={() => resolve(val)}>SUBMIT</Button>
        </>
      );
    },
    { className: "arm-dialog", title: "I'm the title" }
  );

  const getThing = React.useCallback(async () => {
    console.log("0");
    const result = await openDialog({ test: "indeed" });

    alert(result);
  }, [openDialog]);

  const [counter, setCounter] = React.useState(0)
  useInterval(() => setCounter(counter+1), 500, { setOnMount: true })

  const [isOpen, setIsOpen ] = React.useState(false)

  return (
    <>
      <Button onClick={getThing}>open le dialog</Button>
      <br/>
      <Button onClick={()=>setIsOpen(true)}>open le modal</Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen} closeTime={0}>
        HELLO
      </Modal>
    </>
  );
};
