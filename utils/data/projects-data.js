import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: "Gallery Website",
    description:
      "Sebagai Fullstack Developer, saya membangun sebuah Website Galeri yang komprehensif menggunakan PHP Native untuk pengembangan backend dan MySQL untuk manajemen basis data. Bagian front-end dirancang dengan Bootstrap 5 untuk memastikan desain yang responsif dan modern. Pengembangan dan debugging dilakukan di Visual Studio Code (VS-Code), dengan WampServer digunakan sebagai pengembangan lokal..",
    tools: ["PHP Native", "MySql", "Bootstrap 5", "Vs-Code", "Wamp"],
    role: "Fullstack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    description:
      "Sebagai Full Stack Developer, saya membangun sebuah Website SPP menggunakan Laravel untuk pengembangan backend dan Bootstrap CSS untuk memastikan desain front-end yang responsif dan modern. Basis data dikelola menggunakan MySQL. Saya menggunakan Laragon sebagai lingkungan pengembangan lokal dan Visual Studio Code (VS-Code) untuk pengembangan dan debugging..",
    name: "SPP Website",
    tools: ["Laravel", "Bootstrap CSS", "MySQL", "Laragon", "Vs-Code"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Perpustakaan Digital",
    description:
      "Sebagai Full Stack Developer, saya membangun sebuah Website SPP menggunakan Laravel untuk pengembangan backend dan Bootstrap CSS untuk memastikan desain front-end yang responsif dan modern. Basis data dikelola menggunakan MySQL. Saya menggunakan Laragon sebagai lingkungan pengembangan lokal dan Visual Studio Code (VS-Code) untuk pengembangan dan debugging..",
    tools: [
      "PHP Native",
      "Bootstrap",
      "SCSS",
      "MongoDB",
      "OpenAI",
      "Wamp",
      "Vs-Code",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    description:
      "Sebagai Front-end Developer, saya membangun sebuah Website Portfolio menggunakan React dan Next.js untuk pengembangan front-end yang dinamis. Tailwind CSS digunakan untuk memastikan desain yang responsif dan modern. Proyek ini dikembangkan dan di-debug menggunakan Visual Studio Code (VS Code) dan Npm untuk manajemen paket.",
    name: "Portfolio Website",
    tools: ["React", "Tailwind CSS", "Next Js", "Vs Code", "Npm"],
    code: "",
    demo: "",
    image: ayla,
    role: "Front-end Developer",
  },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },