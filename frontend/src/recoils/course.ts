import { atom } from "recoil";
import { ICourse } from "../types/course.ts";

export const courses = atom<ICourse[]>({
  key: "courses",
  default: [
    {
      id: 1,
      name: "Frontend разработка. Начальный уровень",
      imageUrl: "https://placehold.co/200",
      lessons: [
        {
          id: 1,
          title: "Знакомство",
          subLessons: [
            {
              id: 1,
              title: "Первый урок",
              items: [
                {
                  text: "Привет всем, это урок про разработку сайтов",
                },
                {
                  imageUrl: "https://placehold.co/500/800",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
