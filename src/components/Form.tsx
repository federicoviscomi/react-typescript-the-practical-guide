import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from 'react';

export type FormHandle = {
    clear: () => void;
}; 

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function ({ onSave, children, ...props }, ref) {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
            }
        };
    });

    function handleSubimt(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    };
    return (
        <form onSubmit={handleSubimt} {...props} ref={form}>
            {children}
        </form>
    );
});

export default Form;