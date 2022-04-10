import images from "../assets"
import RegularText from "./styled/RegularText"
import Row from "./styled/Row"

const EventsHolder = () => {
    return(
        <div style={{
            backgroundColor: "#1A1C20",
            padding: "10px 20px",
            borderRadius:10

        }}>
            <Row style={{
                alignItems:"center",
                justifyContent:"space-between"
            }}>
                <RegularText style={{
                    fontWeight: "bold",
                    fontSize:18, 
                }}>Events</RegularText>
                <img style={{
                    cursor:"pointer",
                    height: 30,
                    width: 30,
                }}  
                src={images.menu} alt="MenuImg" />
            </Row>
            <div style={{
                padding:10,
                height:200,
                position:"relative",
                display:"flex",
                overflow:"hidden",
                flexDirection:"column",
                justifyContent:"space-between",
            }}>
                <img style={{
                    opacity:0.5,
                    zIndex:1,
                    height:200,
                    position:"absolute",
                    top:0,
                    bottom:0,
                    right:0,
                    left:0,
                }}
                src={images.event} alt="eventimage"/>
                <RegularText style={{
                    zIndex:5,
                    fontSize:16,
                    fontWeight:700
                }}>Tech Conference</RegularText>
                <RegularText style={{
                    zIndex:5
                }}>Join this amazing event in Paris </RegularText>
            </div>
        </div>
    )
}
export default EventsHolder