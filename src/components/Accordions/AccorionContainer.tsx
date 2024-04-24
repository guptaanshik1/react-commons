import { accordionData } from "../../utils/accordionData";
import AccordionList from "./AccordionList";

const AccordionContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Accordion</h1>
      <AccordionList accordions={accordionData} />
    </div>
  );
};

export default AccordionContainer;
