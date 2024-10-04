import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import { CourseGoal } from "./type/courseGoal";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      return [...prevGoals, {
        title: goal,
        description: summary,
        id: Math.random()
      }];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1>Your Course Goalstsxcdfdxz</h1>
      </Header>
      <NewGoal handleAddGoal={handleAddGoal}></NewGoal>
      <CourseGoalList goals={goals} handleDelete={handleDeleteGoal} />
    </main>
  );
}
