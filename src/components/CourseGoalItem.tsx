import { type FC, type PropsWithChildren } from "react";

type CourseGoalItemProps = PropsWithChildren<{
    title: string;
    handleDelete: () => void;
}>;
const CourseGoalItem: FC<CourseGoalItemProps> = ({ title, handleDelete, children }: CourseGoalItemProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={handleDelete}>Delete</button>
        </article>
    );
}
export default CourseGoalItem;