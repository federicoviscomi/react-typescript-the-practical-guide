import { FC } from "react";
import { CourseGoal } from "../type/courseGoal";
import CourseGoalItem from "./CourseGoalItem";

type CourseGoalListProp = {
  goals: CourseGoal[];
  handleDelete: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProp> = ({ goals, handleDelete }) => {
  return (<ul>
    {goals.map((goal) => {
      return (
        <li key={goal.id}>
          <CourseGoalItem title={goal.title} handleDelete={() => handleDelete(goal.id)}>
            <p>{goal.description}</p>
          </CourseGoalItem>
        </li>
      );
    })}
  </ul>);
}
export default CourseGoalList;