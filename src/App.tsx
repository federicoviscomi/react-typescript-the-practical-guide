import CourseGoal from "./components/CourseGoal";

import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn react + Typescript",
        description: "There were quite a few things I did not know",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1>Your Course Goalstsxcdfdxz</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goalsfz</button>
      <CourseGoalList goals={goals}>

      </CourseGoalList>
    </main>
  );
}
