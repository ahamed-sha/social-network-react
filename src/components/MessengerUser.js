import CircleImage from "./CircleImage"
import images from "../assets"
import RegularText from "./styled/RegularText"
import Row from "./styled/Row"

const MessengerUser = ({active=false}) => {
    return(
        <Row style={{
            margin: "10px 0",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            <Row>
            <CircleImage image={images.demoUser} />
            <RegularText style={{
                fontWeight: "bold"
            }}>Random Name</RegularText>
            </Row>

            <div style={{
                height:10,
                width:10,
                borderRadius:5,
                backgroundColor: active ? "green" : "grey"
            }}>

            </div>
        </Row>
    )
}
export default MessengerUser