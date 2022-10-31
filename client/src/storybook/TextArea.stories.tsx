import { Meta, StoryObj } from '@storybook/react';
import { Image, Gif, ChartBarHorizontal, Smiley, CalendarBlank } from 'phosphor-react'; 
import { TextArea, TextAreaAreaProps, TextAreaRootProps } from '../components/TextArea';
import { Button } from '../components/Button';
import imageFile from './../assets/imgs/profilePicture.png';

const image = {
    src: imageFile,
    alt: 'my image',
  };

export default {
    title: 'Components/TextArea',
    component: TextArea.Root,
    args: {
    children: [
        <form action="">
            <section className='flex flex-col border-white border py-4 px-3'>
            
                <div className='flex'>
                        <img src = {image.src} alt="Profile Picture" className='w-12 h-12 rounded-full' />
                    <TextArea.Area/>
                </div>
            
                <div className='flex flex-row ml-16 mt-1   justify-center align-middle '>
                    <TextArea.Icon>
                        <Image className='mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors' />
                        <Gif className='mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors' />
                        <ChartBarHorizontal className='mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors' />
                        <Smiley className='mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors' />
                        <CalendarBlank className='mt-0 mr-64 rounded-full hover:text-darkBlue cursor-pointer transition-colors' />
                    </TextArea.Icon>
                    <Button on='disabled' padding='small' children='Tweet'></Button>
                </div>
            
            </section>
        </form>
    ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextAreaRootProps>

export const Default: StoryObj<TextAreaRootProps> = {}