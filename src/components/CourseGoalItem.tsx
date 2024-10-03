import { type FC, type PropsWithChildren } from "react";

type CourseGoalItemProps = PropsWithChildren<{
    title: string;
}>;
const CourseGoalItem: FC<CourseGoalItemProps> = ({ title, children }: CourseGoalItemProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>Delete</button>
        </article>
    );
}
export default CourseGoalItem;