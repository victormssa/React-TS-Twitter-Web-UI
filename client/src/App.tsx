import { SideMenu } from './SideMenu'
import { Home } from './Home'
export function App() {
    return (
      <>
        <section className='flex bg-background'>
            <SideMenu />
            <Home />
        </section>
      </>
    )
  };