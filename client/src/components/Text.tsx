import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface TextProps {
    size?: '2xs' | 'xs' |'sm' | 'md' | 'lg' | 'xl' | '2xl';
    color?: 'blue' | 'black' | 'white' | 'dark1' | 'dark2' ;
    weight?: '500' | '700';
    children: ReactNode;
    asChild? :boolean;
    className?: string;
}

export function Text({ size = 'md', color = 'black', weight = '700', children, asChild, className }: TextProps) {
    const Comp = asChild ? Slot : 'p';
    return (
        <Comp 
            className={clsx(
                'font-bold', 
                {
                    'text-2xs': size === '2xs',
                    'text-xs': size === 'xs',
                    'text-sm': size === 'sm',
                    'text-md': size === 'md',
                    'text-lg': size === 'lg',
                    'text-xl': size === 'xl',
                    'text-2xl': size === '2xl',
                    'text-blue': color === 'blue',
                    'text-black': color === 'black',
                    'text-white': color === 'white',
                    'text-dark6': color === 'dark1',
                    'text-dark5': color === 'dark2',
                    'font-medium': weight === '500',
                    'font-bold': weight === '700',
                },
                className,
        )}>{children}</Comp>
    )
}