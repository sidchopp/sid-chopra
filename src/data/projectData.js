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
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    website: "https://mern-workout-app-ecru.vercel.app/",
    techUsed: "MERN stack with Authentication",
  },
  {
    title: "Fin Track",
    description: [
      "Track every dollar effortlessly and stay stress-free about your money.",
    ],
    img: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    website: "https://fintrack-8f7c3.web.app/login",
    techUsed: "React, Firebase",
  },
  {
    title: "Weather Wise Trip",
    description: [
      "Do not let the weather rain on your parade – plan your perfect trip.",
    ],
    img: "https://images.unsplash.com/photo-1611043714658-af3e56bc5299?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    website: "https://weather-wise-trip.vercel.app/",
    techUsed: "Next, Node, TypeScript",
  },
  {
    title: "Blogs",
    description: [
      "A list of some interesting random articles. More to be added soon.",
    ],
    img: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    website: "https://sm-chopra.vercel.app/",
    techUsed: "Next, GraphQL, Contentful",
  },
  {
    title: "Canadian Holidays",
    description: [
      "A province-wise list of Canadian public and federal holidays for all 13 provinces.",
    ],
    img: "https://images.unsplash.com/photo-1607578774871-249a5b07c380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    website: "https://sid-canada-holidays.netlify.app/",
    techUsed: "React, TypeScript, Node",
  },
  {
    title: "Space X",
    description: [
      "A User can view and request info about SpaceX, its past launches and rockets used for those launches.",
    ],
    img: "https://images.unsplash.com/photo-1634175735590-b2ed7b02d143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80",
    website: "https://sid-spacex.netlify.app/",
    techUsed: "React, GraphQL, Node",
  },
  {
    title: "Hotel Reservation",
    description: [
      "Welcome to my Angular adventure: A basic Hotel reservation app.",
    ],
    img: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    website: "https://angular-hotel-reservation.netlify.app/",
    techUsed: "Angular, Node",
  },
  {
    title: "Mobile Shopping Cart",
    description: [
      "Redux Toolkit is used with React.js to create this Project.",
    ],
    img: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    website: "https://sid-redux-toolkit-mobile-cart.netlify.app/",
    techUsed: "React, Redux Toolkit",
  },

  {
    title: "All Weather",
    description: [
      "It has some cool features like graphical display of temperatures, weather forecast, etc.",
    ],
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    website: "https://sid-allweather.netlify.app/",
    techUsed: "Node, React",
  },
  {
    title: "About My Location",
    description: [
      "This App will display the exact location of a User along with a lot of other useful info.",
    ],
    img: "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    website: "https://about-my-location.netlify.app/",
    techUsed: "Node, React",
  },

  {
    title: "Periodic Table",
    description: [
      "This Periodic Table App is a tabular display of all the known chemical elements.",
    ],
    img: "https://media.istockphoto.com/photos/silicon-element-of-mendeleev-periodic-table-magnified-with-magnifier-picture-id511921456?b=1&k=20&m=511921456&s=170667a&w=0&h=H6eAgLsAjiv2hdmLlx5fxfyp9aHwp4TOskDsq49B3vk=",
    website: "https://sid-periodic-table.netlify.app/",
    techUsed: "Node, React",
  },
  {
    title: "My Projects",
    description: [
      "You are watching this project in action at the moment - A compilation of all my Projects.",
    ],
    img: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    website: "https://sid-chopra.netlify.app/",
    techUsed: "Node, React",
  },
  {
    title: "Guess My Number",
    description: [
      "Try and guess a randomly generated whole number between 0 to 20, in minimum attempts.",
    ],
    img: "https://images.unsplash.com/photo-1620662831351-9f68f76d0b9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    website: "https://sid-guess-number.netlify.app/",
    techUsed: "HTML, CSS, Vanilla JavaScript",
  },
  {
    title: "Seasons",
    description: [
      "This App will show a  season (Spring, Summer, Winter or Fall) based on the User's location.",
    ],
    img: "https://images.unsplash.com/photo-1604798048004-03a7abb05d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    website: "https://sid-seasons.netlify.app/",
    techUsed: "Node, React",
  },
];

const projectData = generateProjectDataWithDynamicIds(rawProjectData);

export { projectData };
