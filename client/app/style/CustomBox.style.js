'use client';
import { styled } from '@mui/material/styles';
import theme from '@/utils/theme.js';


const CustomBox = styled('div')(({
    minHeight,
    border,
    sidebarBackground,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    padding,
    width,
    paddingBottom

}) => ({
    border: border,
    minHeight: minHeight,
    border: border,
    background: theme.colors.background[sidebarBackground],
    // background: "red",
    display: display,
    flexDirection: flexDirection,
    alignItems: alignItems,
    justifyContent: justifyContent,
    padding: padding,
    width: width,
    paddingBottom:paddingBottom,

    "& .sidebarTitle-laptop-layout": {
        // border: "1px solid red",
        // paddingBlock: "1rem",
        fontSize: theme.typography.fontSize.logo,
        fontWeight: theme.typography.fontWeight.bold,
        background: theme.colors.text.brandGradient,
        bacckgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            left: '3px',
            bottom: '-2px',
            height: '4px',
            width: "76%",
            background: theme.colors.gradients.decorative.line,
            borderRadius: '2px'
        }


    },
    "&.sidebarItem-laptop-layout": {
        border: `1px solid ${theme.colors.gradients.border.cyan30}`,
        backgroundImage: theme.colors.gradients.sideItemsColor.backgroundImage,
        color: theme.colors.gradients.sideItemsColor.color,
        borderRadius: theme.borderRadius.button,
        boxShadow: theme.shadow.sidebarActive,
        padding: "14px 20px",
        marginBottom: "1rem",
        fontSize: theme.typography.fontSize.sidebarItemSize,
        fontWeight: theme.typography.fontWeight.medium,
        cursor:"pointer",
        "& .name": {
            marginLeft: "10px",
        }
    },
    "&.SideBar-footer-outer-laptop": {
        width: '100%',
        display: "flex",
        justifyContent: "center",
        position: "relative",
        marginBottom:'2rem',
        "&::after": {
            content: '""',
            position: "absolute",
            bottom:"-7px ",
            left: 0,
            width: "100%",
            height: "1px",
            background: theme.colors.gradients.cyanToPurple,
            borderRadius: "10px",
        },


    },
    "& .SideBar-footer-laptop": {
        fontSize: theme.typography.fontSize.tiny
    }

}))

export default CustomBox;