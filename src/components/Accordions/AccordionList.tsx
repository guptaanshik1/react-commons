import { useState } from "react";
import { IAccordion } from "../../utils/data";
import Accordion from "./Accordion";

interface IProps {
  accordions: IAccordion[];
}

const AccordionList = ({ accordions }: IProps) => {
  const [openAccordionIds, setOpenAccordionIds] = useState<number[]>([]);
  const handleToggle = (id: number) => {
    setOpenAccordionIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((accordionId) => accordionId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      {accordions?.map((accordion) => (
        <div key={accordion?.id}>
          <Accordion accordion={accordion} onToggle={handleToggle} />
          {accordion?.subAccordions && (
            <div>
              <AccordionList accordions={accordion?.subAccordions} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
