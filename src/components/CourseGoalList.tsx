import { FC } from "react";
import { CourseGoal } from "../App";


type CourseGoalListProp = {
    goals: CourseGoal[]
}

const CourseGoalList:FC<CourseGoalListProp> = ({goals}) => {
return (<ul>
    {goals.map((goal) => {
      return (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      );
    })}
  </ul>);
}
export dewfault CourseGoalList;