import { ComponentPropsWithoutRef } from 'react';
import { FC } from "react";

type ButtonProps = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
    el: 'anchor';
} & ComponentPropsWithoutRef<'a'>

const Button: FC<ButtonProps | AnchorProps> = (props: ButtonProps | AnchorProps) => {
    if (props.el === 'anchor') {
        return <a className='button' {...props}></a>;
    }
    return <button className='button' {...props}></button>;
};

export default Button;