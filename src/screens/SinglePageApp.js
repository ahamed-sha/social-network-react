import {BrowserRouter} from "react-router-dom"
import Header from "../components/Header"
import Spacer from "../components/Spacer"
import PageHolder from "./subscreens/PageHolder"

const SinglePageApp = () => {
    return(
        <BrowserRouter>
        
            <div style={{
                minHeight: '100vh',
                backgroundColor: 'black',
            }}>
                <Header/>
                <Spacer height={20}/>
                <PageHolder/>
            </div>
        </BrowserRouter>
    )
}
export default SinglePageApp