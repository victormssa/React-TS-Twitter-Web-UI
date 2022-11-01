import { Sparkle, Chat, ArrowsClockwise, Heart, UploadSimple, Image, Gif, ChartBarHorizontal, Smiley, CalendarBlank } from "phosphor-react";
import { Text } from "./Text"
import { Heading } from './Heading';
import imageFile from '../assets/imgs/profilePicture.png';
import postImage1 from '../assets/imgs/PostImage1.png'
import postImage2 from '../assets/imgs/PostImage2.png'
import profilePicture from '../assets/imgs/ProfilePicture3.png'
import profilePicture2 from '../assets/imgs/ProfilePicture4.png'

const image = {
    src: imageFile,
    alt: 'Profile Picture',
};

export function Post() {
    return (
      <>
        <section className='flex bg-white'>
          <section>
              <div className="flex flex-row mt-3 ml-3">
                <img src={profilePicture} alt="Profile Picture" className="w-12 h-12 rounded-full"/>
                <div className="flex flex-col ml-3">
                  <div className="flex flex-row ">
                    <Heading>Devon Lane</Heading>
                    <Text color="dark1" weight="500" size="sm">@johndue</Text>
                    <Text color="dark1" weight="500" size="sm">. 23s</Text>
                  </div>
                  <Text color="black" weight="500" size="sm">Tom Is in a big hurry</Text>
                </div>
              </div>
                <img src={postImage1} alt="Posted Image" className="w-[500px] h-[280px] rounded-2xl ml-[72px] border border-blue"/>
                <PostUnder></PostUnder>
          </section>
        </section>
      </>
    )
  };
  
  export function Post2() {
    return (
      <>
        <section className='flex bg-white'>
          <section>
              <div className="flex flex-row mt-3 ml-3">
                <img src={profilePicture2} alt="Profile Picture" className="w-12 h-12 rounded-full"/>
                <div className="flex flex-col ml-3">
                  <div className="flex flex-row ">
                    <Heading>Darlene Robertson</Heading>
                    <Text color="dark1" weight="500" size="sm">@johndue</Text>
                    <Text color="dark1" weight="500" size="sm">. 23s</Text>
                  </div>
                  <Text color="black" weight="500" size="sm">Tom Is in a big hurry</Text>
                </div>
              </div>
                <img src={postImage2} alt="Posted Image" className="w-[500px] h-[280px] rounded-2xl ml-[72px] border border-blue"/>
                <PostUnder></PostUnder>
          </section>
        </section>
      </>
    )
  };
  
export function PostUnder() {
    return(
        <>
          <div>
            <div className="flex flex-row ml-[72px] mt-3">
              <Chat className="text-dark5 mr-1"></Chat> <Text size="2xs" weight="500" className="text-dark5 mr-20">61</Text>
              <ArrowsClockwise className="text-dark5 mr-1"></ArrowsClockwise> <Text size="2xs" weight="500" className="text-dark5 mr-20">12</Text>
              <Heart className="text-pink mr-1"></Heart> <Text size="2xs" weight="500" className="text-pink mr-20">6.3k</Text>
              <UploadSimple className="text-dark5 mr-1"></UploadSimple> <Text size="2xs" weight="500" className="text-dark5 ">61</Text>
            </div>
            <Text className="ml-[72px] mt-5" color="blue" weight="500" size="2xs">Show this thread</Text>
          </div>
        </>
    )
}

