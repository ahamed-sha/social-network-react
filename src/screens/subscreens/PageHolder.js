import EventsHolder from "../../components/EventsHolder"
import HomeUser from "../../components/HomeUser"
import MessengerHolder from "../../components/MessengerHolder"
import Spacer from "../../components/Spacer"
import {Route, Routes} from "react-router-dom"
import PostScreen from "./PostScreen"
import GameScreen from "./GameScreen"
import VideoScreen from "./VideoScreen"
import Groupchat from "./GroupChat"
import FAQScreen from "./FAQScreen"

const PageHolder = () => {
    return(
        <div style={{
            padding:10,
            display:"flex"
        }}>
            {/* user information */}
            <div style={{
                width:"20%"
            }}>
            <HomeUser/>
            <Spacer height={20}/>
            <MessengerHolder/>
            </div>
            {/* routing page */}
            <Spacer width={50}/>
            <div style={{
                flex: 1
            }}>
                <Routes>
                    <Route path="/" element={<PostScreen/>} />
                    <Route path="/game" element={<GameScreen />} />
                    <Route path="/chat" element={<Groupchat />} />
                    <Route path="/video" element={<VideoScreen />} />
                    <Route path="/FAQ" element={<FAQScreen />} />
                </Routes>
            </div>
            {/* events */}
            <Spacer width={50}/>
            <div style={{
                marginRight:40,
                width:"25%"
            }}>
                <EventsHolder/>
            </div>
        </div>
    )
}
export default PageHolder