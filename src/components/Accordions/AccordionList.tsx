import { IAccordion } from "../../utils/data";
import Accordion from "./Accordion";

interface IProps {
  accordions: IAccordion[];
}

const AccordionList = ({ accordions }: IProps) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {accordions?.map((accordion) => (
        <div key={accordion?.id}>
          <Accordion accordion={accordion} />
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
