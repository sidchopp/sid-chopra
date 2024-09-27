const generateProjectDataWithDynamicIds = (data) => {
  return data.map((item, index) => ({
    ...item,
    id: (index + 1).toString(),
  }));
};

const rawProjectData = [
  {
    title: "FIT Track",
    description: [
      "Get Stronger Every Day with Personalized Workout Plans Tailored Just for You.",
    ],
    img: "/images/fit-track.jpg",
    website: "https://mern-workout-app-ecru.vercel.app/",
    techUsed: "MERN stack with Authentication",
  },
  {
    title: "Fin Track",
    description: [
      "Track every dollar effortlessly and stay stress-free about your money.",
    ],
    img: "/images/fin-track.jpg",
    website: "https://fintrack-8f7c3.web.app/login",
    techUsed: "React, Firebase",
  },
  {
    title: "Weather Wise Trip",
    description: [
      "Do not let the weather rain on your parade – plan your perfect trip.",
    ],
    img: "/images/weather-wise-trip.jpg",
    website: "https://weather-wise-trip.vercel.app/",
    techUsed: "Next, Node, TypeScript",
  },
  {
    title: "Blogs",
    description: [
      "A list of some interesting random articles. More to be added soon.",
    ],
    img: "/images/blogs.avif",
    website: "https://sm-chopra.vercel.app/",
    techUsed: "Next, GraphQL, Contentful",
  },
  {
    title: "Canadian Holidays",
    description: [
      "A province-wise list of Canadian public and federal holidays for all 13 provinces.",
    ],
    img: "images/canadian-holidays.avif",
    website: "https://sid-canada-holidays.netlify.app/",
    techUsed: "React, TypeScript, Node",
  },
  {
    title: "Space X",
    description: [
      "A User can view and request info about SpaceX, its past launches and rockets used for those launches.",
    ],
    img: "images/spaceX.avif",
    website: "https://sid-spacex.netlify.app/",
    techUsed: "React, GraphQL, Node",
  },
  {
    title: "Hotel Reservation",
    description: [
      "Welcome to my Angular adventure: A basic Hotel reservation app.",
    ],
    img: "images/hotel.avif",
    website: "https://angular-hotel-reservation.netlify.app/",
    techUsed: "Angular, Node",
  },
  {
    title: "Mobile Shopping Cart",
    description: [
      "Redux Toolkit is used with React.js to create this Project.",
    ],
    img: "images/mobile.avif",
    website: "https://sid-redux-toolkit-mobile-cart.netlify.app/",
    techUsed: "React, Redux Toolkit",
  },

  {
    title: "All Weather",
    description: [
      "It has some cool features like graphical display of temperatures, weather forecast, etc.",
    ],
    img: "images/weather.avif",
    website: "https://sid-allweather.netlify.app/",
    techUsed: "Node, React",
  },
  {
    title: "About My Location",
    description: [
      "This App will display the exact location of a User along with a lot of other useful info.",
    ],
    img: "images/location.avif",
    website: "https://about-my-location.netlify.app/",
    techUsed: "Node, React",
  },

  {
    title: "Periodic Table",
    description: [
      "This Periodic Table App is a tabular display of all the known chemical elements.",
    ],
    img: "images/periodic-table.avif",
    website: "https://sid-periodic-table.netlify.app/",
    techUsed: "Node, React",
  },
  {
    title: "My Personal Projects",
    description: [
      "You are watching this project in action at the moment - A compilation of all my Projects.",
    ],
    img: "images/projects.avif",
    website: "https://sid-chopra.netlify.app/",
    techUsed: "Node, React",
  },
  {
    title: "Guess My Number",
    description: [
      "Try and guess a randomly generated whole number between 0 to 20, in minimum attempts.",
    ],
    img: "images/guess-my-number.avif",
    website: "https://sid-guess-number.netlify.app/",
    techUsed: "HTML, CSS, Vanilla JavaScript",
  },
  {
    title: "Seasons",
    description: [
      "This App will show a  season (Spring, Summer, Winter or Fall) based on the User's location.",
    ],
    img: "images/seasons.avif",
    website: "https://sid-seasons.netlify.app/",
    techUsed: "Node, React",
  },
];

const projectData = generateProjectDataWithDynamicIds(rawProjectData);

export { projectData };
