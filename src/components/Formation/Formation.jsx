import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Formation = () => (
  <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>Master 2 - Spécialité MBDS</h3>
        <p>2022 - 2023 | Sophia-Antipolis, France</p>
        <p>Parcours mobilité, big data et intégration de systèmes</p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>Licence - Informatique</h3>
        <p>2019 - 2022 | Université de Nice, France</p>
        <p>
          Formation en développement logiciel, systèmes d'information et
          algorithmique.
        </p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>Baccalauréat Scientifique</h3>
        <p>2016 - 2019 | Lycée de Nice, France</p>
        <p>Spécialisation en mathématiques et sciences de l'ingénieur.</p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>Stage en développement web</h3>
        <p>Été 2021 | Société XYZ, Nice, France</p>
        <p>
          Conception et développement d'une application web pour la gestion de
          projet.
        </p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>Projets personnels</h3>
        <p>2018 - Présent | Projets divers</p>
        <p>
          Développement de plusieurs applications web et mobiles, incluant des
          jeux et des outils utilitaires.
        </p>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
);

export default Formation;
