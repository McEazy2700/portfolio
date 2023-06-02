import { EmailForm, Page, PageLink, SocialLinks } from "@/components/common";
import Image from "next/image";

export default function ContactPage() {
    return (
        <Page>
            <div className="flex w-full flex-col gap-4">
                <h1 className="text-4xl font-extrabold">Contact</h1>
                <div className="flex w-full flex-col gap-3 md:flex-row">
                    <div className="flex-1">
                        <Image width={400} height={600} src="/3d-guy.png" alt="3d guy wearing purple hoodie" />
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <EmailForm />
                        <div className="flex items-end gap-3 flex-col">
                            <h2 className="font-semibold text-2xl text-violet-600">Find Me</h2>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
            <PageLink name="Projects" href="/projects" left/>
        </Page>
    );
}
