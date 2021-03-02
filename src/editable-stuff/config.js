// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#245468, #9ABCF0, #75c6d1, #6CBDCB, #A7A5ED, #7F93A7",
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

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Rotational Technology Intern',
      location: 'Teachers Insurance Annuity Association',
      date: 'June 2021 – August 2021',
      description: 'An upcoming adventure!',
    },
    {
      role: 'Undergraduate Teaching Assistant',
      location: 'Stony Brook University',
      date: 'January 2020 – May 2020',
      description: 'I was a teaching assistant for CSE220: System Fundamentals I. In addition to ' +
        'responding to student questions on Piazza, ' +
        'I held weekly office hours to extend my help to over 100 students in modeling ' +
        'and debugging their work in MIPS Assembly. I helped to coordinate review seeions  ' +
        'with 12 other TAs and aided in desigining bi-weekly course projects for the semester.',
    },
    {
      role: 'Assistant Researcher',
      location: 'NYU Langone Medical Center',
      date: 'September 2016 – June 2017',
      description: 'I worked as an assistant researcher under Dr. Bruce Cronstein at NYU Langone ' +
        'Medical Center. I worked in a team of 2 to conduct research in rheumatic diseases. My primary ' +
        'work was in preparing and dissecting multiple controlled batches of specimen for study of ' +
        'rheumatic disease, as well as logging and compiling data recieved from samples for the lab for ' +
        'weekly presentations. ',
    },
  ]
}


// export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
export { navBar, mainBody, about, repos, skills, getInTouch, experiences};
