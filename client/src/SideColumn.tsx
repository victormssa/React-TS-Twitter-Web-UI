import { Heading } from "./components/Heading"
import { Text } from "./components/Text"
import image1 from './assets/imgs/news1.png'
import image2 from './assets/imgs/news2.png'
import image3 from './assets/imgs/news3.png'
import profile2 from './assets/imgs/ProfilePicture2.png'
import profile3 from './assets/imgs/ProfilePicture3.png'
import { Button } from "./components/Button";
export function SideColumn() {
    return (
      <>
        <aside className="fixed h-screen right-0 bg-white w-[515px] border-l border-dark7">
            <header>
                <input type="text" name="" id="" />
            </header>
            <blockquote>
                <section className="bg-dark8 rounded-2xl w-[380px] ml-6">
                    <div className="border-b border-background h-10">
                        <div className="">
                            <Heading className="ml-4 mb-2 py-2" size="xl">What's happening</Heading>
                        </div>
                    </div>
                    <div className="border-b border-background flex flex-row">
                        <div className=" flex-col">
                            <Text className="ml-4 mt-2" size="xs" weight="500" color="dark1">COVID19 . Last night</Text>
                            <Text className="ml-4" size="md">England’s Chief Medical Officer<br /> says the UK is at the most<br /> dangerous time of the pandemic</Text>
                            <div className="flex flex-row mb-1">
                                <Text className="ml-4" size="xs" weight="500" color="dark1">Trending with</Text>
                                <Text className="ml-1" size="xs" weight="500" color="blue">#covid19</Text>
                            </div>
                        </div>
                        <img src={image1} alt="News Image" className="w-[70px] h-[70px] rounded-xl ml-4 mt-2"/>
                    </div>
                    <div className="border-b border-background flex flex-row">
                        <div className=" flex-col">
                            <Text className="ml-4 mt-2" size="xs" weight="500" color="dark1">US NEWS . 4h ago</Text>
                            <Text className="ml-4" size="md">Parler may go offline following suspensions by Amazon, Apple and Google</Text>
                            <div className="flex flex-row mb-1">
                                <Text className="ml-4" size="xs" weight="500" color="dark1">Trending with</Text>
                                <Text className="ml-1" size="xs" weight="500" color="blue">#trump</Text>
                            </div>
                        </div>
                        <img src={image2} alt="News Image" className="w-[70px] h-[70px] rounded-xl ml-4 mr-2 mt-2"/>
                    </div>
                    <div className="border-b border-background flex flex-row">
                        <div className=" flex-col">
                            <Text className="ml-4 mt-2" size="xs" weight="500" color="dark1">India . 1h ago</Text>
                            <Text className="ml-4" size="md">India vs Australia: India hold on to earn a draw on Day 5 in <br /> Sydney Test</Text>
                            <div className="flex flex-row mb-1">
                                <Text className="ml-4" size="xs" weight="500" color="dark1">Trending with</Text>
                                <Text className="ml-1" size="xs" weight="500" color="blue">#sport</Text>
                            </div>
                        </div>
                        <img src={image3} alt="News Image" className="w-[70px] h-[70px] rounded-xl ml-4 mr-2 mt-2"/>
                    </div>
                    <Text className="ml-6 mt-2 pb-2" size="xs" weight="500" color="blue">Show more</Text>
                </section>
                <section>
            
                </section>
            </blockquote>
            <blockquote className="mt-4">
                <section className="bg-dark8 rounded-2xl w-[380px] ml-6">
                    <div className="border-b border-background h-10">
                        <div className="">
                            <Heading className="ml-4 mb-2 py-2" size="xl">Who to follow</Heading>
                        </div>
                    </div>
                    <div className=" border-background flex flex-col ">
                        <div className="mb-2 flex flex-row border-b border-background pb-2">
                            <img src={profile2} alt="News Image" className="w-12 h-12 rounded-full ml-4 mt-2"/>
                            <div className=" flex-col mt-2">
                            <Text className="ml-4" size="md">Basic Cooper</Text>
                            <Text className="ml-4 " size="xs" weight="500" color="dark1">@alessandroveronezi</Text>
                            </div>
                            <button className="border-blue border text-blue text-2xs px-5 py-0 mt-2 ml-10 font-bold rounded-full  transition-colors"><p className="p-0">Follow</p></button>
                        </div>
                        <div className="mb-2 flex flex-row border-b border-background pb-2">
                            <img src={profile2} alt="News Image" className="w-12 h-12 rounded-full ml-4 mt-2"/>
                            <div className=" flex-col mt-2">
                            <Text className="ml-4" size="md">Basic Cooper</Text>
                            <Text className="ml-4 " size="xs" weight="500" color="dark1">@alessandroveronezi</Text>
                            </div>
                            <button className="border-blue border text-blue text-2xs px-5 py-0 mt-2 ml-10 font-bold rounded-full  transition-colors"><p className="p-0">Follow</p></button>
                        </div>
                        
                    </div>
                    <Text className="ml-6 mt-2 pb-2" size="xs" weight="500" color="blue">Show more</Text>
                </section>
                <section>
            
                </section>
            </blockquote>
        </aside>
      </>
    )
  };
  