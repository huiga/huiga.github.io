// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#466BA0, #6E9EE9, #88CED7, #6CBDCB, #A7A5ED, #7F93A7",
  firstName: "Eddie",
  middleName: "",
  lastName: "Xu",
  message: "An aspiring software engineer. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/huiga",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eddie-xu-6b96051b5/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/eddiexu.png"),
  imageSize: 400,
  message1:
    "I am a junior studying Computer Science and Applied Math & Statistics " +
    "at Stony Brook University under the honors program. My primary work resides in building full stack web applications " + 
    "that bring existing systems into a modern-day take as well as creating applications that tackle tedious tasks in " + 
    "one's everyday life. From building a best-beginner-hack app at SBUHacks'20 to building apps that address a pandemic, " +
    "I strive to make a difference through my work.",
  message2: "As a developer in the prime age of technological development, I happily challenge myself in "+
  "taking tasks and extrapolating their use cases to pave the path to new and exciting discoveries.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "huiga", //i.e."johnDoe12Gh"
  reposLength: 5,
  specificRepos: [],
};

// Leadership SECTION
// const leadership = {
//   show: false,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
//   images: [
//     { 
//       img: require("../editable-stuff/eddiexu.png"), 
//       label: "First slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//     { 
//       img: require("../editable-stuff/eddiexu.png"), 
//       label: "Second slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//   ],
//   imageSize: {
//     width:"615",
//     height:"450"
//   }
// };

const skills = {
  show: true,
  heading: "Skills",
  skillNames: [
    {name: "Java"},
    {name: "Python"},
    {name: "C"},
    {name: "HTML/CSS"},
    {name: "JavaScript"},
    {name: "MySQL"},
    {name: "OCaml"},
    {name: "MIPS"},
    {name: "LaTex"},
    {name: "Swift"},
    {name: "XML"},
    {name: "GDScript"},
    {name: "Octave"}
  ]
};


const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any quesitons, opportunities, or simply want to connect, feel free to send me an email at ",
  email: "eddiexudev@gmail.com",
};

// const experiences = {
//   show: false,
//   heading: "Experiences",
//   data: [
//     {
//       role: 'Software Engineer',
//       companylogo: require('../assets/img/dell.png'),
//       date: 'June 2018 – Present',
//     },
//     {
//       role: 'Front-End Developer',
//       companylogo: require('../assets/img/boeing.png'),
//       date: 'May 2017 – May 2018',
//     },
//   ]
// }


// export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
export { navBar, mainBody, about, repos, skills, getInTouch };
