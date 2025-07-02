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
    paddingBottom,
    marginTop,
    marginBottom

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
    paddingBottom: paddingBottom,
    marginTop: marginTop,
    marginBottom:marginBottom,
    marginBottom:marginBottom,

    // ----------------------------------------------
    // 1. Side navbar css
    // ----------------------------------------------

    "& .sidebarTitle-laptop-layout": {
        // border: "1px solid red",
        paddingBlock: "1.5rem",
        fontSize: theme.typography.fontSize.logo,
        fontWeight: theme.typography.fontWeight.bold,
        background: theme.colors.text.gradientText,
        bacckgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            left: '0px',
            bottom: '24px',
            height: '3px',
            width: "100%",
            background: theme.colors.gradients.decorative.line,
            borderRadius: '3px'
        }


    },
    "&.sidebarItem-laptop-layout-active-testing": {
        border: `1px solid ${theme.colors.gradients.border.cyan30}`,
        backgroundImage: theme.colors.gradients.sideItemsColor.backgroundImage,
        color: theme.colors.gradients.sideItemsColor.color,
        borderRadius: theme.borderRadius.button,
        boxShadow: theme.shadow.sidebarActive,
        padding: "14px 20px",
        marginBottom: "1rem",
        fontSize: theme.typography.fontSize.sidebarItemSize,
        fontWeight: theme.typography.fontWeight.medium,
        cursor: "pointer",
        "& .name": {
            marginLeft: "10px",
        }
    },

    //-----------------------------------------------------
    // this sidebarItem-laptop-layout-Active-testing and sidebarItem-laptop-layout-inActive-testing
    // classes are just for testing purpose , We will remove it while implementing the logic
    //-----------------------------------------------------
    "&.sidebarItem-laptop-layout-inActive-testing": {

        color: theme.colors.gradients.sideItemsColor.color,

        padding: "14px 20px",
        marginBottom: "1rem",
        fontSize: theme.typography.fontSize.sidebarItemSize,
        fontWeight: theme.typography.fontWeight.medium,
        cursor: "pointer",
        "& .name": {
            marginLeft: "10px",
        }
    },
    "&.SideBar-footer-outer-laptop": {
        width: '100%',
        display: "flex",
        justifyContent: "center",
        position: "relative",

        "&::after": {
            content: '""',
            position: "absolute",
            bottom: "19px ",
            left: 0,
            width: "100%",
            height: "1px",
            background: theme.colors.gradients.cyanToPurple,
            borderRadius: "10px",
        },


    },
    "& .SideBar-footer-laptop": {
        fontSize: theme.typography.fontSize.tiny
    },

    // ----------------------------------------------
    // 2.  TaskTimelineHeader css
    // ----------------------------------------------
    "& .task-timeline-header-typography": {
        fontSize: theme.typography.fontSize.heading,
        fontWeight: theme.typography.fontWeight.bold,
        background: theme.colors.text.gradientText,
        bacckgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        position: 'relative',
        marginBottom:'0.5rem',
        '&::after': {
            content: '""',
            position: 'absolute',
            left: '0px',
            bottom: '-10px',
            height: '3px',
            width: "60%",
            background: theme.colors.gradients.decorative.line,
            borderRadius: '3px'
        }

    }

}))

export default CustomBox;