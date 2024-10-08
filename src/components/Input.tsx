import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function ({ id, label, ...props }, ref) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} ref={ref} {...props}></input>
        </p>
    );
});

export default Input;