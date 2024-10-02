import CourseGoal from "./components/CourseGoal";

import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <Header image={{src: goalsImg, alt: 'a list of goals'}}>
        <h1>Your Course Goalstsxcdfdxz</h1>
      </Header>
      <CourseGoal title="asdf title">
        <p>Description</p>
      </CourseGoal>
    </main>
  );
};
