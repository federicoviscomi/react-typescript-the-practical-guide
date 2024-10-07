import { ComponentPropsWithoutRef } from 'react';
import { FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
}

const isAnchorProps = (props: ButtonProps | AnchorProps): props is AnchorProps => {
    return 'href' in props;
}

const Button: FC<ButtonProps | AnchorProps> = (props: ButtonProps | AnchorProps) => {
    if (isAnchorProps(props)) {
        return <a className='button' {...props}></a>;
    }
    return <button className='button' {...props}></button>;
};

export default Button;