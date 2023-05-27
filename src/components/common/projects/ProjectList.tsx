"use client";
import { useProjectsQuery } from "@/graphql/codegen/generated";
import { FullLoadingLogo, ProjectCard, TimedAlert } from "@/components/common";
import { AlertVariants } from "../feedback/alert/TimedAlert";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineContentClasses } from "@mui/lab";
import { useMediaQuery } from "@mui/material";

export default function ProjectList() {
    const [{ fetching, data, error }] = useProjectsQuery();
    const isLarge = useMediaQuery("(min-width: 768px)")

    return (
        <div className={`flex flex-col w-full flex-1 ${isLarge ? "" : "self-end"}`}>
            {error && <TimedAlert variant={AlertVariants.ERROR}>{error.message}</TimedAlert>}
            <Timeline sx={!isLarge ? {[`& .${timelineContentClasses.root}`]: {
                    flex: "100%", }}: {}}
                position={isLarge ? "alternate": "left"}>
                {data?.projects.data.map(project => (
                    <TimelineItem key={project.id}>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined" />
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <ProjectCard key={project.id} project={project} />
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
            <FullLoadingLogo show={fetching} />
        </div>
    );
}
