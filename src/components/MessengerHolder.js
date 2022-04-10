import MessengerUser from "./MessengerUser"
import RegularText from "./styled/RegularText"
import Row from "./styled/Row"
import StyledGreyCard from "./styled/StyledGreyCard"

const MessengerHolder = () => {
    return(
        <StyledGreyCard>
            <Row style={{
                justifyContent: "space-between"
            }}>
                <RegularText style={{
                    fontWeight: "bold"
                }}>Messenger</RegularText>
                <RegularText style={{
                    color: "#1878F0",

                }}>All</RegularText>
            </Row>
            <MessengerUser active/>
            <MessengerUser active/>
            <MessengerUser/>
            <MessengerUser/>
        </StyledGreyCard>
    )
}
export default MessengerHolder