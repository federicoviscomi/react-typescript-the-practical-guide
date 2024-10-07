import { ComponentPropsWithoutRef, FC } from "react";

type InputProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputProps> = ({ id, label, ...props }) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}></input>
        </p>
    );
}

export default Input;