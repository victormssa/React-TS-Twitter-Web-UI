import { ReactNode, TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TextAreaRootProps {
    children: ReactNode;
}

function TextAreaRoot(props: TextAreaRootProps) {
    return(
        <div className="flex items-center gap-2 bg-transparent font-medium focus-within:ring-0 ring-transparent ">
            {props.children}
        </div>
    )
}

export interface TextAreaIconProps {
    children: ReactNode;
}

function TextAreaIcon(props: TextAreaIconProps) {
    return (
        <slot className=' text-emoji1 text-blue  '>
            {props.children}
        </slot>
    )
}

TextAreaIcon.displayName = 'TextArea.Icon';
TextAreaRoot.displayName = 'TextArea.Root';
TextAreaArea.displayName = 'TextArea.Area';

export interface TextAreaAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function TextAreaArea(props: TextAreaAreaProps) {
    return (
            <>
            {props.children}
            <textarea className =
            'bg-transparent text-black text-xl placeholder:text-dark5 outline-none ml-4 mt-3 resize-none overflow-hidden leading-none'
            placeholder="What's happening" cols={30} maxLength={350} 
            ></textarea>
            <p className='ml-2 mt-3 font-normal'></p>
            </>
    )
}

export const TextArea = {
    Root: TextAreaRoot,
    Area: TextAreaArea,
    Icon: TextAreaIcon,
}