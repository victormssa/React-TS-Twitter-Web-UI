import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { TwitterLogo, House, Hash, Bell, EnvelopeSimple, BookmarkSimple, List, User, DotsThreeCircle, DotsThree } from 'phosphor-react'; 
import imageFile from './assets/imgs/profilePicture.png';
import './styles/global.css';

const image = {
  src: imageFile,
  alt: 'Profile Picture',
};

export function SideMenu() {
  return (
    <>
      <nav className='w-[400px] h-screen border-dark7 border-r bg-white fixed mr-5'>
        <aside className='flex flex-col ml-36 mr-18 '>
          <ul className=''>
            <li className='mt-2'>
              <TwitterLogo className="text-logo mr-4 text-blue" />
            </li>
            
            <li className='mt-7'>
              <Anchor.Root>
                <Anchor.Anchor>
                  <House className="text-emoji2 mr-4" />
                  Home
                </Anchor.Anchor>
              </Anchor.Root>
            </li>
            
            <li className='mt-7'>
              <Anchor.Root>
                <Anchor.Anchor>
                  <Hash className="text-emoji2 mr-4" />
                  Explore
                </Anchor.Anchor>
              </Anchor.Root>
            </li>
            
            <li className='mt-7'>
              <Anchor.Root>
                <Anchor.Anchor>
                  <Bell className="text-emoji2 mr-4" />
                  Notifications
                </Anchor.Anchor>
              </Anchor.Root>
            </li>
            
            <li className='mt-7'>
              <Anchor.Root>
                <Anchor.Anchor>
                  <EnvelopeSimple className="text-emoji2 mr-4" />
                  Messages
                </Anchor.Anchor>
              </Anchor.Root>
            </li>
            
            <li className='mt-7'>
              <Anchor.Root>
                <Anchor.Anchor>
                  <BookmarkSimple className="text-emoji2 mr-4" />
                  Bookmarks
                </Anchor.Anchor>
              </Anchor.Root>
            </li>
            
            <li className='mt-7'>
              <Anchor.Root>
                <Anchor.Anchor>
                  <List className="text-emoji2 mr-4" />
                  Messages
                </Anchor.Anchor>
              </Anchor.Root>
            </li>
            
            <li className='mt-7'>
              <Anchor.Root>
                <Anchor.Anchor>
                  <User className="text-emoji2 mr-4" />
                  Profile
                </Anchor.Anchor>
              </Anchor.Root>
            </li>
            
            <li className='mt-7'>
              <Anchor.Root>
                <Anchor.Anchor>
                  <DotsThreeCircle className="text-emoji2 mr-4" />
                  More
                </Anchor.Anchor>
              </Anchor.Root>
            </li>
          </ul>
          
          <section className='left-[130px] bottom-[130px] absolute'>
            <Button handleClick={console.log} className='bg-blue text-white hover:bg-darkBlue' padding="large">
              Tweet
            </Button>
          </section>
          
          <section className='flex w-28 pt-36 align-middle'>
              <img src={image.src} alt="" className='w-10 h-10 rounded-full mr-2'/>
              <div className='flex flex-col'>
                <Heading size='md'>
                  Jerome Bell
                </Heading>
                <Text size='md' color='dark1' weight='500'>
                  @afonsoinocente
                </Text>
                <DotsThree className='text-emoji2 absolute left-[350px] bottom-[30px] hover:text-white hover:bg-blue rounded-full cursor-pointer'></DotsThree>
              </div>
              
          </section>
        </aside>
      </nav>
    </>
  )
};