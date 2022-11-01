import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '../Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum',
        size: 'md',
        color: 'black',
        weight: '700',
    },
    argTypes: {
    color: {
        options: ['blue', 'black', 'white', 'dark1', 'dark2'],
        control: {
            type: 'inline-radio'
        }
    },
    size: {
        options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        control: {
            type: 'inline-radio'
        }
    },
    weight: {
        options: ['500', '700'],
        control: {
            type: 'inline-radio'
        }
    },
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const SuperExtraSmall: StoryObj<TextProps> = {
    args: {
        children: 'Lorem ipsum',
        size: '2xs',
        color: 'black',
        weight: '700',
    }
}

export const ExtraSmall: StoryObj<TextProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'xs',
        color: 'black',
        weight: '700',
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'sm',
        color: 'black',
        weight: '700',
    }
}

export const Medium: StoryObj<TextProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'md',
        color: 'black',
        weight: '700',
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'lg',
        color: 'black',
        weight: '700',
    }
}

export const ExtraLarge: StoryObj<TextProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'xl',
        color: 'black',
        weight: '700',
    }
}

export const SuperExtraLarge: StoryObj<TextProps> = {
    args: {
        children: 'Lorem ipsum',
        size: '2xl',
        color: 'black',
        weight: '700',
    }
}

export const Paragraph: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with a P tag</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}