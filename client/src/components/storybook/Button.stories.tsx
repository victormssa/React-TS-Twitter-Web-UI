import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '../Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Tweet',
        padding: 'large',
        
    },
    argTypes: {
        padding: {
            options: ['large', 'small',],
            control: {
                type: 'inline-radio'
            }
        },
        on: {
            options: ['enabled', 'disabled',],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<ButtonProps>

export const TweetMenu: StoryObj<ButtonProps> = {}

export const TweetHome: StoryObj<ButtonProps> = {
    args: {
        children: 'Tweet',
        padding: 'large',
        on: 'enabled',
    }
}