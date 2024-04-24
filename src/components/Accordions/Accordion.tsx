import { IAccordion } from "../../utils/data";

interface IProps {
  accordion: IAccordion;
  onToggle: (id: number) => void;
}

const Accordion = ({ accordion, onToggle }: IProps) => {
  const handleToggle = () => {
    onToggle(accordion?.id);
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "12px",
        cursor: "pointer",
        marginBottom: "18px",
      }}
      onClick={handleToggle}
    >
      {accordion?.title}
    </div>
  );
};

export default Accordion;
