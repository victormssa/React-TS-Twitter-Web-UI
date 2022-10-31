import { Sparkle, Chat, ArrowsClockwise, Heart, UploadSimple, Image, Gif, ChartBarHorizontal, Smiley, CalendarBlank } from "phosphor-react";
import imageFile from './../assets/imgs/profilePicture.png';
import { Button } from "./components/Button";
import { Heading } from './components/Heading';
import { TextArea } from "./components/TextArea";

export function Home() {
    return (
      <>
        <main className="flex flex-col bg-white">
            <header className="flex flex-row border-dark7 h-12 border-b ">
                <Heading className="ml-3 mt-3 text-lg">
                    Home
                </Heading>
                <Sparkle className="text-emoji1 text-blue cursor-pointer ml-[493px] mr-3 mt-3"></Sparkle>
            </header>
            <section className="border-b border-dark7">
                <TextArea.Root>
                  <form action="">
                    <section className="flex flex-col py-4 px-3">
                      <div className="flex">
                        <img
                          alt="Profile Picture"
                          className="w-12 h-12 rounded-full"
                          src="/src/assets/imgs/profilePicture.png"
                        />
                        <TextArea.Area />
                      </div>
                      <div className="flex flex-row ml-16 mt-1 justify-center align-middle  ">
                        <TextArea.Icon>
                          <Image className="mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                          <Gif className="mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                          <ChartBarHorizontal className="mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                          <Smiley className="mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                          <CalendarBlank className="mt-0 mr-64 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                        </TextArea.Icon>
                        <Button on="enabled" padding="small">
                          Tweet
                        </Button>
                      </div>
                    </section>
                  </form>
                </TextArea.Root>
            </section>
        </main>
      </>
    )
  };