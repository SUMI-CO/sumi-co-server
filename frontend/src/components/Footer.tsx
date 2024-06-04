import { FC } from "react";

export const Footer: FC = () => {
  const socialNavigations = [
    {
      text: "Instagram",
      link: "",
    },
    {
      text: "Linkedin",
      link: "",
    },
    {
      text: "Telegram",
      link: "",
    },
    {
      text: "Discord",
      link: "",
    },
    {
      text: "Support service",
      link: "",
    },
  ];

  return (
    <footer className="root-footer bg:#f2f4fa padding:45|45|25|45 flex gap-x:40">
      {socialNavigations.map((navigation) => (
        <a
          key={navigation.text}
          href={navigation.link}
          target="_blank"
          className="cursor:pointer text-decoration:none f:#212427"
        >
          {navigation.text}
        </a>
      ))}
    </footer>
  );
};
