import { FC } from "react";

import { INavigationButton } from "../types/pages";

export const IndexPage: FC = () => {
  const navigationButtons: INavigationButton[] = [
    {
      headerLabel: "Самостоятельные работы",
      items: [
        {
          title: "Курс",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque dolores illo nobis nulla quae tenetur.",
          link: "",
          imageUrl: "https://placehold.co/160",
          imageAlt: "",
        },
        {
          title: "Оценки",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque dolores illo nobis nulla quae tenetur.",
          link: "",
          imageUrl: "https://placehold.co/160",
          imageAlt: "",
        },
      ],
    },
    {
      headerLabel: "График менторов",
      items: [
        {
          title: "Запись",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque dolores illo nobis nulla quae tenetur.",
          link: "",
          imageUrl: "https://placehold.co/160",
          imageAlt: "",
        },
        {
          title: "Расписание",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque dolores illo nobis nulla quae tenetur.",
          link: "",
          imageUrl: "https://placehold.co/160",
          imageAlt: "",
        },
      ],
    },
    {
      headerLabel: "Команды",
      items: [
        {
          title: "Соревнования",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque dolores illo nobis nulla quae tenetur.",
          link: "",
          imageUrl: "https://placehold.co/160",
          imageAlt: "",
        },
        {
          title: "По предмету",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque dolores illo nobis nulla quae tenetur.",
          link: "",
          imageUrl: "https://placehold.co/160",
          imageAlt: "",
        },
      ],
    },
  ];

  return (
    <div className="index-page flex justify-content:space-between gap-x:75 p:45">
      <div className="left">
        <div className="navigations-buttons">
          {navigationButtons.map((navigation, index) => (
            <div
              key={navigation.headerLabel}
              className={"navigation " + (index > 0 ? "margin-top:40" : "")}
            >
              <h3 className="title font:bold f:#566F9E padding-bottom:10 f:24 border-bottom:1|solid|#566F9E margin-right:100 margin-bottom:20">
                {navigation.headerLabel}
              </h3>

              <div className="items flex justify-content:space-between align-items:center gap-x:20">
                {navigation.items.map((item) => (
                  <div
                    key={item.title}
                    className="item flex bg:#fff beautiful-shadow"
                  >
                    <div className="left w:160 h:160">
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        className="w:160 h:160"
                      />
                    </div>

                    <div className="right">
                      <h4 className="border-bottom:1|solid|#21242726 padding:15 f:18">
                        {item.title}
                      </h4>

                      <p className="padding:15">{item.descriptions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <h3>Достижения</h3>

        <div className="items flex flex-column gap-x:20">hello</div>
      </div>
    </div>
  );
};
