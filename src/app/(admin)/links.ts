import { IconType } from "react-icons";
import { BsFolder } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

export interface LinkType {
    name: string;
    url: string;
    icon: IconType;
}

const adminLinks: LinkType[] = [
    {
        name: "Dashboard",
        url: "/admin",
        icon: AiOutlineHome
    },
    {
        name:"Projects",
        url: "/admin/projects",
        icon: BsFolder
    }
];

export default adminLinks;
