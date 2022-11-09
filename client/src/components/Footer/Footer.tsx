import { Text } from "../Text/Text"
import { Button } from "../Button/Button";

export function Footer() {
    return (
      <>
        <footer className="bg-blue w-full h-20 fixed bottom-0 z-10 flex flex-row" id="footer">
            <div className="flex flex-col mt-3 ml-72">
                <Text color="white" className="text-2xl">Don't miss what's happening</Text>
                <Text color="white" weight="500">People on Twitter are the first to know.</Text>
            </div>
            <div className="mt-5 ml-[700px]">
                <Button padding="small" className="bg-white text-black border-white hover:bg-blue border px-[20px]" handleClick={(event) => { const footer = document.getElementById('footer')?.classList.add('hidden')}}>Log in</Button>
                <Button padding="small" className="bg-white text-black border-white hover:bg-blue border px-[20px] ml-4" handleClick={(event) => { const footer = document.getElementById('footer')?.classList.add('hidden')}}>Sign up</Button>
            </div>
        </footer>
      </>
    )
  };
  
