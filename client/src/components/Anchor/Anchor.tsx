import { ReactNode, AnchorHTMLAttributes } from 'react';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export interface AnchorRootProps {
    children: ReactNode;
}

function AnchorRoot(props: AnchorRootProps) {
    return(<div>{props.children}</div>)
}

export interface AnchorIconProps {
    children: ReactNode;
}

function AnchorIcon(props: AnchorIconProps) {
    return (
        <slot className=' text-black '>
            {props.children}
        </slot>
    )
}

AnchorIcon.displayName = 'Anchor.Icon';
AnchorRoot.displayName = 'Anchor.Root'; 
AnchorText.displayName = 'Anchor.Text';

export interface AnchorTextProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function AnchorText(props: AnchorTextProps) {
    return (
        <a className='flex align-middle hover:text-blue font-bold text-lg cursor-pointer'>
        {props.children}</a>
    )
}

export const Anchor = {
    Root: AnchorRoot,
    Anchor: AnchorText,
    Icon: AnchorIcon,
}