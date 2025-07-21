import { mobileNavbarHeight } from "@/utils/Height.util.js";
import theme from "@/utils/theme";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const NavBarBoxForMobile=styled(Box)(({
    background,
})=>({
    background: theme.colors.background[background],
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "1.3rem",
    position: "fixed",
    left: "0px",
    right: "0px",
    bottom: "0px",
    width: "100%",
    height:mobileNavbarHeight,
    zIndex:2,
        
    '@media screen and (min-width: 1024px) ':{
        display:"none"
    
    }
}))

export default NavBarBoxForMobile;

