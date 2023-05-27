export interface ImageItemType {
    name: string;
    url: string;
    alt?: string;
}

export interface DoingType {
    title: string;
    tools: ImageItemType[]
}

const doings: DoingType[] = [
    {
        title: "Backend Development",
        tools: [
            {
                name: "Python",
                url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
                alt: "Python logo"
            },
            {
                name: "GraphqQL",
                url: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
                alt: "Graphql logo"
            },
            {
                name: "FastAPI",
                url: "/fastapi.svg",
                alt: "FastAPI logo"
            },
            {
                name: "Django",
                url: "/django.svg",
                alt: "Django logo"
            }
        ]
    },
    {
        title: "Frontend Development",
        tools: [
            {
                name: "TypeScript",
                url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
                alt: "TypeScript Logo"
            },
            {
                name: "React",
                url: "/react.svg",
                alt: "React Logo"
            },
            {
                name: "Next.js",
                url: "/nextjs-2.svg",
                alt: "Next.js Logo"
            }
        ]
    },
    {
        title: "Content Creation",
        tools: [
            {
                name: "OBS",
                url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/OBS_Studio_Logo.svg",
                alt: "OBS Logo"
            },
            {
                name: "Kdenlive",
                url: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Kdenlive-logo.svg",
                alt: "Kdenlive logo"
            }
        ]
    },
    {
        title: "Animation",
        tools: [
            {
                name: "Opentoonz",
                url: "/Opentoonz.svg",
                alt: "Opentoonz logo"
            }
        ]
    }
]

export default doings
