import Footer from "../component/footer"
import HeroSection from "../component/HeroSection"
import LeaderCard from "../component/LeaderCard"
import NavBar from "../component/NavBar"
import Section from "../component/Section"
import StaffCard from "../component/StaffCard"

function Homepage(){
    return(
        <div>
          <NavBar/>
          <HeroSection/>
          <div >
            <LeaderCard/>
          </div>
          
          <div className="flex w-[90%] py-9 space-x-7 mx-14">
            <Section image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1019/LogoECSPublishingGroup1-removebg-preview-1-e1721125158123.png" Heads="10% list growth &" Head="10% sales spike in tough niche" Description="it`s nice that with GetResponse,we have the tools and intergrations we need within our budget. " Text="Read case study"/>
            <Section image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1022/living_vision-removebg-preview-e1721125329100.png" Heads="75% of all public" Head="sales from email autoresponders" Description="Together with GetResponse, we`ve been able to convince customers of need,cuminating in compelling sales" Text="Read case study"/>
            <Section image="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1025/red-hot-logo1_-removebg-preview-e1721125532901.png" Heads="Up to $1,000" Head="for every 1,000 emails sent" Description="Regarding revenue contribution, the email marketing channel is like free money for us.

R" Text="Read case study"/>
          </div>
          <div className="flex">
          <StaffCard  name="Mike" position="Hr" departement="HumanResources"image="https://randomuser.me/api/portraits/men/32.jpg"/>
          <StaffCard name="John" position="Md" departement="RoadResources" image="https://randomuser.me/api/portraits/women/44.jpg"/>
          <StaffCard name="Peter" position="C.E.O" departement="WaterResources" image="https://randomuser.me/api/portraits/men/22.jpg"/>
          </div>
          

          <Footer/>
        </div>
    )
};
export default Homepage