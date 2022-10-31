import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface ButtonProps {
    padding? : 'large' | 'small';
    on?: 'enabled' | 'disabled';
    children: ReactNode;
    asChild? :boolean;
    className?: string;
}

export function Button({ padding = 'large', on = 'enabled', children, asChild, className }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp 
            className={clsx(
                'font-bold bg-blue text-white py-3 px-24 rounded-full text-sm hover:bg-darkBlue transition-colors',
                {
                    'px-21': padding === 'large',
                    'px-5 py-2': padding === 'small',
                    'opacity-50 cursor-not-allowed': on === 'disabled',
                    'opacity-100 cursor-pointer': on === 'enabled',
                    
                },
                className,
        )}>{children}</Comp>
    )
}

