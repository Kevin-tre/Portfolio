import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";

const Formation = () => (
  <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <CodeIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>Formation Intégrateur Web</h3>
        <p>2024 | OpenClassrooms, France</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quae!
        </p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary">
          <ComputerIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>POEC Front end</h3>
        <p>2023 | Distanciel, Human Booster, France</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="success">
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>BTS NRC</h3>
        <p>2017 | Vichy, France</p>
        <p>Cité Scolaire Albert Londre</p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary">
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>Bac ES</h3>
        <p>2015 | Vichy, France</p>
        <p>Cité Scolaire Albert Londre</p>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
);

export default Formation;
