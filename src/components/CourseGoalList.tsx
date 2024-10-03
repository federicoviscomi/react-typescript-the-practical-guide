import { FC } from "react";
import { CourseGoal } from "../type/courseGoal";
import CourseGoalItem from "./CourseGoalItem";

type CourseGoalListProp = {
  goals: CourseGoal[]
}

const CourseGoalList: FC<CourseGoalListProp> = ({ goals }) => {
  return (<ul>
    {goals.map((goal) => {
      return (
        <li key={goal.id}>
          <CourseGoalItem title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoalItem>
        </li>
      );
    })}
  </ul>);
}
export default CourseGoalList;