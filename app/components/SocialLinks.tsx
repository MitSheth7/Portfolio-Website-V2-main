import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineFileText,
} from "react-icons/ai";

const links = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mitsheth7/",
    icon: <AiOutlineLinkedin />,
  },
  {
    name: "GitHub",
    link: "https://github.com/MitSheth7",
    icon: <AiOutlineGithub />,
  },
  {
    name: "Email",
    link: "mailto:mitspsheth7@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1XDTH-K-T-QXdj86k8J6aYMfdejUXOrs8/view?usp=sharing",
    icon: <AiOutlineFileText />,
  },
];

type Props = {
  showNames?: boolean;
};

const SocialLinks = ({ showNames = true }: Props) => {
  return (
    <section>
      <ul className="flex flex-row mt-8 mb-6 pb-[15px] space-x-4 space-y-0 font-sm text-dark-600 dark:text-dark-300">
        {links.map((item, i) => (
          <li key={`link-${i}`}>
            <a
              className="flex items-center hover:text-neutral-400 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href={item.link}
            >
              <p className="font-bold text-3xl mr-2 md:mr-0 md:text-xl h-4">
                {item.icon}
              </p>
              {showNames && (
                <p className="hidden sm:block font-bold text-l ml-2 h-5">
                  {item.name}
                </p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialLinks;
