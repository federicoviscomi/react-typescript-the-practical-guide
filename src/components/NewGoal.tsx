import { FC, useRef } from "react";

type NewGoalProps = {
    handleAddGoal: (goal: string, summary: string) => void;
};

const NewGoal: FC<NewGoalProps> = ({handleAddGoal}) => {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(goal: string, summary: string) {
        handleAddGoal(goal, summary);
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(goal.current!.value, summary.current!.value);
            e.currentTarget.reset();
        }}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goal}></input>
            </p>
            <p>
                <label htmlFor="summary">summary</label>
                <input id="summary" type="text" ref={summary}></input>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}

export default NewGoal;