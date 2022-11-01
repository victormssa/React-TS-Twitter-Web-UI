import { Meta, StoryObj } from '@storybook/react';
import { TwitterLogo, House, Hash, Bell, EnvelopeSimple, BookmarkSimple, List, User, DotsThreeCircle } from 'phosphor-react'; 
import { Anchor, AnchorProps, AnchorRootProps } from '../Anchor';
import { Heading } from '../Heading';

export default {
    title: 'Components/Anchor',
    component: Anchor.Root,
    args: {
    children: [
        <Anchor.Anchor>
            <House className='text-emoji2 mr-4'/>Home
        </Anchor.Anchor>
    ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<AnchorRootProps>

export const Default: StoryObj<AnchorRootProps> = {}

export const Explore: StoryObj<AnchorProps> = {
    args: {
        children: [
            <Anchor.Anchor>
                <Hash className='text-emoji2 mr-4'/>Explore
            </Anchor.Anchor>
        ]
    }
}

export const Notifications: StoryObj<AnchorProps> = {
    args: {
        children: [
            <Anchor.Anchor>
                <Bell className='text-emoji2 mr-4'/>Notifications
            </Anchor.Anchor>
        ]
    }
}

export const Messages: StoryObj<AnchorProps> = {
    args: {
        children: [
            <Anchor.Anchor>
                <EnvelopeSimple className='text-emoji2 mr-4'/>Messages
            </Anchor.Anchor>
        ]
    }
}

export const Bookmark: StoryObj<AnchorProps> = {
    args: {
        children: [
            <Anchor.Anchor>
                <BookmarkSimple className='text-emoji2 mr-4'/>Bookmark
            </Anchor.Anchor>
        ]
    }
}

export const Lists: StoryObj<AnchorProps> = {
    args: {
        children: [
            <Anchor.Anchor>
                <List className='text-emoji2 mr-4'/>Lists
            </Anchor.Anchor>
        ]
    }
}

export const Profile: StoryObj<AnchorProps> = {
    args: {
        children: [
            <Anchor.Anchor>
                <User className='text-emoji2 mr-4'/>Profile
            </Anchor.Anchor>
        ]
    }
}

export const More: StoryObj<AnchorProps> = {
    args: {
        children: [
            <Anchor.Anchor>
                <DotsThreeCircle className='text-emoji2 mr-4'/>More
            </Anchor.Anchor>
        ]
    }
}

export const Twitter: StoryObj<AnchorProps> = {
    args: {
        children: [
            <Anchor.Anchor>
                <TwitterLogo className='text-emoji2 mr-4 text-blue'/>
            </Anchor.Anchor>
        ]
    }
}