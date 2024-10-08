import { ComponentPropsWithoutRef, FC, FormEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void; 
};

const Form: FC<FormProps> = ({onSave, children, ...props}) => {
    function handleSubimt(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    };
    return (
        <form onSubmit={handleSubimt} {...props}>
            {children}
        </form>
    );
}

export default Form;