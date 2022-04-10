import HeaderSearch from "./HeaderSearch"
import MenuItem from "./MenuItem"

const Header = () => {
    return(
        <header style={{
            margin:"0px 5opx",
            padding:"20px 20px",
            backgroundColor:"black",
            borderBottom:"1px solid #ffffff2a",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
        }}>
            <h1 style={{
                margin:0,
                color:"white",
                fontSize: 30,
                fontWeight: "bold"
            }}>
                the social network
            </h1>
            <div style={{
                display:"flex",
                flexDirection:"row",
                alignItems: "center"
            }}>
                <div style={{
                    marginRight:"17vh",
                }}>
                    <MenuItem/>
                </div>
                <HeaderSearch />
            </div>
            
        </header>
    )
}
export default Header