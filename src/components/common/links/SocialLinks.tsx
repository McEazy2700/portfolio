import { socials } from "@/constants/socials";
import { IconLink } from "@/components/common";


export default function SocialLinks() {
    return (
        <ul className="flex gap-5">
            {socials.map(social => <IconLink key={social.name} title={social.name} href={social.link} icon={social.icon} />)}
        </ul>
    );
}
