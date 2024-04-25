import { IAccordion } from "../../utils/data";

interface IProps {
  accordion: IAccordion;
}

const Accordion = ({ accordion }: IProps) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "12px",
        cursor: "pointer",
        marginBottom: "18px",
      }}
    >
      {accordion?.title}
    </div>
  );
};

export default Accordion;
