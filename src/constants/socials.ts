import { IconType } from "react-icons";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

interface SocialType {
    name: string;
    link: string;
    icon: IconType
}

export const socials: SocialType[] = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/victor-ezekiel-819992236/",
        icon: BsLinkedin
    },
    {
        name: "Twitter",
        link: "https://twitter.com/CodeMcEazy",
        icon: BsTwitter
    },
    {
        name: "Github",
        link: "https://github.com/McEazy2700",
        icon: BsGithub
    }
]
