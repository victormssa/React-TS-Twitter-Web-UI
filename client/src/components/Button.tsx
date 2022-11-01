import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface ButtonProps {
    padding? : 'large' | 'small' | 'xsmall';
    on?: 'enabled' | 'disabled';
    children: ReactNode;
    asChild? :boolean;
    className?: string;
    id?: string;
    onClick?: ReactNode;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

export function Button({ padding = 'large', on = 'enabled', children, asChild, className, id, onClick, handleClick }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp 
            className={clsx(
                'font-bold py-3 px-24 rounded-full text-sm  transition-colors',
                {
                    'px-21': padding === 'large',
                    'px-5 py-2': padding === 'small',
                    'px-5 py-1': padding === 'xsmall',
                    'cursor-not-allowed': on === 'disabled',
                    'cursor-pointer': on === 'enabled',
                    
                },
                className,
                id,
                onClick,
        )}onClick={handleClick}>{children}</Comp>
    )
}

