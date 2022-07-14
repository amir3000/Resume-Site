import Navbar from "../sections/Navbar";
import ProfileCover from "../sections/ProfileCover/";
import Sidebar from "../sections/Sidebar";
import {
  HomeContainer,
  HomeMain,
  HomeWrapper,
  NavbarWrapper,
  SidebarWrapper,
} from "./HomeElements";
function Home() {
  return (
    <>
      <HomeMain>
        <ProfileCover />
        <HomeContainer>
          <HomeWrapper>
            <SidebarWrapper>
              <Sidebar />
            </SidebarWrapper>
            <NavbarWrapper>
               <Navbar /> 
            </NavbarWrapper>
          </HomeWrapper>
        </HomeContainer>
        {/* <Footer />  */}
      </HomeMain>
    </>
  );
}
export default Home;
