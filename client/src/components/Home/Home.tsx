import {
  Sparkle,
  Chat,
  ArrowsClockwise,
  Heart,
  UploadSimple,
  Image,
  Gif,
  ChartBarHorizontal,
  Smiley,
  CalendarBlank,
} from "phosphor-react";
import imageFile from "../../assets/imgs/profilePicture.png";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { TextArea } from "../TextArea/TextArea";
import { Text } from "../Text/Text";
import { Post, Post2, PostUnder } from "../Posted/Post";
import { SideColumn } from "../SideColumn/SideColumn";
import { Footer } from "../Footer/Footer";
import React from "react";

const image = {
  src: imageFile,
  alt: "Profile Picture",
};

export function Home() {
  return (
    <>
      <main className=" flex flex-col bg-white ml-[400px]" id="main">
        <header className="flex flex-row border-dark7 h-12 border-b fixed w-[38.4rem] bg-white">
          <Heading className="ml-3 mt-3 text-lg">Home</Heading>
          <Sparkle className="text-emoji1 text-blue cursor-pointer ml-[493px] mr-3 mt-3" id="button1" onClick={(event) => {
            
          }}></Sparkle>
        </header>

        <section className="border-b border-dark7 mt-10">
          <TextArea.Root>
            <form action="" name="myForm">
              <section className="flex flex-col py-4 px-3">
                <div className="flex">
                  <img
                    alt="Profile Picture"
                    className="w-12 h-12 rounded-full"
                    src={image.src}
                  />
                  <TextArea.Area className="" />
                </div>

                <div className="flex flex-row ml-16 mt-1 justify-center align-middle ">
                  <TextArea.Icon>
                    <Image className="mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                    <Gif className="mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                    <ChartBarHorizontal className="mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                    <Smiley className="mt-0 mr-4 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                    <CalendarBlank className="mt-0 mr-64 rounded-full hover:text-darkBlue cursor-pointer transition-colors" />
                    <Button
                      on="enabled"
                      id="button"
                      padding="small"
                      className=" bg-blue text-white px-4"
                      handleClick={(event) => {
                        event.preventDefault();
                        let counter = 0;
                        let button = document.getElementById('button1')
                        let textArea: any = (
                          document.getElementById(
                            "textarea"
                          ) as HTMLInputElement
                        );
                        textArea.value = null;

                        const feedLocation: any =
                        document.getElementById("feed")!;
                        if (counter == 0 ) {
                          const section1 = document.createElement("section");
                          section1.setAttribute("class", "flex bg-white");
                          section1.setAttribute("id", "1");
                          feedLocation.append(section1);
                          counter++
                          return counter
                        }
                        if (counter == 1 ) {
                          const section2 = document.createElement("section");
                          section2.setAttribute("class", "");
                          section2.setAttribute("id", "2");
                          const id1: any = document.getElementById("id1") as HTMLElement;
                          id1.append(section2);
                          counter++
                          return counter
                        }
                        if (textArea.value != null) {
                          button?.classList.toggle('cursor-not-allowed opacity-50');
                        }
                      }}
                    >
                      Tweet
                    </Button>
                  </TextArea.Icon>
                </div>
              </section>
            </form>
          </TextArea.Root>
        </section>

        <div className="h-3 bg-dark8 border-b border-background"></div>

        <section className=" flex flex-col-reverse" id="feed">
          <Post></Post>
          <Post2></Post2>
          <Post></Post>
        </section>
        <SideColumn></SideColumn>
      </main>
      <Footer></Footer>
    </>
  );
}

export function PostCustom(textArea: HTMLTextAreaElement) {
  return (
    <>
      <section className="flex bg-white">
        <section>
          <div className="flex flex-row mt-3 ml-3">
            <img
              src={image.src}
              alt="Profile Picture"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col ml-3">
              <div className="flex flex-row ">
                <Heading>Devon Lane</Heading>
                <Text color="dark1" weight="500" size="sm">
                  @johndue
                </Text>
                <Text color="dark1" weight="500" size="sm">
                  . 23s
                </Text>
              </div>
              <Text color="black" weight="500" size="sm">
                {textArea.value}
              </Text>
            </div>
          </div>
          <img
            src={image.src}
            alt="Posted Image"
            className="w-[500px] h-[280px] rounded-2xl ml-[72px] border border-blue"
          />
          <PostUnder></PostUnder>
        </section>
      </section>
      ;
    </>
  );
}
