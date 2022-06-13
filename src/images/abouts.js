import about01 from "../assets/about01.jpg";
import about02 from "../assets/about02.jpg";
import about03 from "../assets/about03.jpg";
import about04 from "../assets/about04.jpg";
import about05 from "../assets/about05.jpg";

const images = {
  about01,
  about02,
  about03,
  about04,
  about05,
};

const abouts = [
  {
    title: "Web Development",
    description: "Building and maintaining websites",
    img: images.about01,
  },
  {
    title: "Full Stack",
    description: "End to end application development",
    img: images.about02,
  },
  {
    title: "Front-End Design",
    description: "Creating dynamic UX / UI",
    img: images.about03,
  },
  {
    title: "Back-End Security",
    description: "Managing data from the server to user",
    img: images.about04,
  },
];

export default abouts;
