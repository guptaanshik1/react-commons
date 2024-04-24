import { IComment } from "./data";

export const commentsData: IComment[] = [
  {
    id: 1,
    name: "Anshik Gupta",
    title: "React JS",
    replies: [
      { id: 2, name: "John Wick", title: "Angular JS" },
      {
        id: 3,
        name: "Deadpool",
        title: "Vue JS",
        replies: [{ id: 4, name: "John Cena", title: "Svelte JS" }],
      },
    ],
  },
  {
    id: 5,
    name: "Wolverine",
    title: "React Native",
    replies: [{ id: 6, name: "Randy Orton", title: "Recat Native" }],
  },
];
