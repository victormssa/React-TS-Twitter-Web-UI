import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const SuperExtraSmall: StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsum',
        size: '2xs',
        color: 'black',
        weight: '700',
    }
}

export const ExtraSmall: StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'xs',
        color: 'black',
        weight: '700',
    }
}

export const Small: StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'sm',
        color: 'black',
        weight: '700',
    }
}

export const Medium: StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'md',
        color: 'black',
        weight: '700',
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'lg',
        color: 'black',
        weight: '700',
    }
}

export const ExtraLarge: StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'xl',
        color: 'black',
        weight: '700',
    }
}

export const SuperExtraLarge: StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsum',
        size: '2xl',
        color: 'black',
        weight: '700',
    }
}

export const Heading1: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with a H1 tag</h1>
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

export const Heading2: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h2>Heading with a H2 tag</h2>
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

export const Heading3: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h3>Heading with a H3 tag</h3>
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

export const Heading4: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h4>Heading with a H4 tag</h4>
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