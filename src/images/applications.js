import days_to_remember from "../assets/days_to_remember.png";
import sarah_drinks from "../assets/sarah_drinks.png";
import national_parks from "../assets/national_parks.png";
import tech_news_java from "../assets/tech_news_java.jpg";
import anytime_budget_tracker from "../assets/anytime_budget_tracker.png";
import snake_game from "../assets/snake_game.png";
import tic_tac_toe from "../assets/tic_tac_toe.jpg";
import password_generator from "../assets/password_generator.png";
import workout_tracker from "../assets/workout_tracker.png";
import tech_blog from "../assets/tech_blog.png";
import note_taker from "../assets/note_taker.png";
import shop_react_redux from "../assets/shop_react_redux.png";

const img = {
  days_to_remember,
  sarah_drinks,
  national_parks,
  tech_news_java,
  anytime_budget_tracker,
  snake_game,
  tic_tac_toe,
  password_generator,
  workout_tracker,
  tech_blog,
  note_taker,
  shop_react_redux,
};

const applications = [
  {
    title: "Days To Remember",
    skill: ["React", "GraphQL", "Twilio"],
    image: img.days_to_remember,
    deploy: "https://days-to-remember.herokuapp.com/",
    repo: "https://github.com/kabaothao/Days-to-Remember",
    overview: "MERN Greeting Generator",
  },
  {
    title: "Sarah Drinks",
    skill: ["Sass", "HTML", "WebFonts"],
    image: img.sarah_drinks,
    deploy: "https://daveshouse44.github.io/sarah_drinks/",
    repo: "https://github.com/daveshouse44/sarah_drinks",
    overview: "Responsive client website",
  },
  {
    title: "U.S. National Parks",
    skill: ["JavaScript", "API"],
    image: img.national_parks,
    deploy: "https://cumar-khalif.github.io/U.S.-National-Parks/",
    repo: "https://github.com/Cumar-khalif/U.S.-National-Parks",
    overview: "Multiple API search",
  },
  {
    title: "Just Tech News",
    skill: ["Java", "JDK", "SpringBoot", "IntelliJ"],
    image: img.tech_news_java,
    deploy: "https://javaintellij-technews.herokuapp.com/",
    repo: "https://github.com/daveshouse44/tech-news-java-api",
    overview: "News aggregator app",
  },
  {
    title: "Anytime Budget Tracker",
    skill: ["NoSQL", "IndexDB"],
    image: img.anytime_budget_tracker,
    deploy: "https://budget-tracker-anytime.herokuapp.com/",
    repo: "https://github.com/daveshouse44/Anytime_Budget_Tracker",
    overview: "Finance tracker PWA",
  },
  {
    title: "Snake Game!",
    skill: ["HTML", "CSS", "JavaScript"],
    image: img.snake_game,
    deploy: "https://daveshouse44.github.io/snake_game/",
    repo: "https://github.com/daveshouse44/snake_game",
    overview: "JavaScript game classic",
  },
  {
    title: "Tic Tac Toe!",
    skill: ["Angular", "TypeScript", "Nebular"],
    image: img.tic_tac_toe,
    deploy: "https://tic-tac-toe-44.herokuapp.com/",
    repo: "https://github.com/daveshouse44/tic_tac_toe",
    overview: "Angular PWA game",
  },
  {
    title: "Password Generator",
    skill: ["HTML", "JavaScript"],
    image: img.password_generator,
    deploy: "https://daveshouse44.github.io/PasswordGenerator/",
    repo: "https://github.com/daveshouse44/PasswordGenerator",
    overview: "User imput randomizer",
  },
  {
    title: "Fitness Tracker",
    skill: ["NoSQL", "MongoDB"],
    image: img.workout_tracker,
    deploy: "https://workout-tracker-mdb.herokuapp.com/",
    repo: "https://github.com/daveshouse44/Workout_Tracker",
    overview: "MongoDB based app",
  },
  {
    title: "Tech Blog",
    skill: ["Sequelize", "Handlebars"],
    image: img.tech_blog,
    deploy: "https://tech-blog-daveshouse44.herokuapp.com/",
    repo: "https://github.com/daveshouse44/Tech_Blog",
    overview: "MVC with authentication",
  },
  {
    title: "Note Taker",
    skill: ["Express", "Node", "Heroku"],
    image: img.note_taker,
    deploy: "https://dave-note-taker.herokuapp.com/",
    repo: "https://github.com/daveshouse44/Note_Taker",
    overview: "Browser based app",
  },
  {
    title: "Shop React Redux",
    skill: ["GraphQL", "Redux"],
    image: img.shop_react_redux,
    deploy: "https://shop-react-redux.herokuapp.com/",
    repo: "https://github.com/daveshouse44/Shop_React_Redux",
    overview: "Functional ecommerce site",
  },
];

export default applications;
