'use client'
import theme from "@/utils/theme";
import { Box, styled } from "@mui/material";


export const StatusCard = styled(Box)(({
    display,
    alignItems,
    padding,
    background,
    color,
    border,
    borderRadius
}) => ({
    display: display,
    alignItems: alignItems,
    padding: padding,
    background: background,
    backdropFilter: ' blur(4px)',
    webkitBackdropFilter: 'blur(4px)',
    borderRadius: borderRadius,
    border: border,
    
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
   
    "&. taskPanelText":{

        fontSize:theme.typography.fontSize["2xl"],
        color:color
    }
}))