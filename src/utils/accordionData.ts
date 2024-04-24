import { IAccordion } from "./data";

export const accordionData: IAccordion[] = [
  {
    id: 1,
    title: "Accordion 1",
    subAccordions: [
      { id: 2, title: "Accordion 2" },
      {
        id: 3,
        title: "Accordion 3",
        subAccordions: [{ id: 4, title: "Accordion 4" }],
      },
    ],
  },
  {
    id: 5,
    title: "Accordion 5",
    subAccordions: [{ id: 6, title: "Accordion 6" }],
  },
];
