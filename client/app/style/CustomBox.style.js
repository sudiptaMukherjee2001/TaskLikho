'use client';
import { styled } from '@mui/material/styles';
import theme from '@/utils/theme.js';


const CustomBox = styled('div')(({
    minHeight,
    maxHeight,
    height,
    border,
    sidebarBackground,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    padding,
    paddingInline,
    paddingBlock,
    width,
    paddingBottom,
    marginTop,
    marginBottom,
    marginLeft,
    overflow,

}) => ({
    border: border,
    minHeight: minHeight,
    maxHeight: maxHeight,
    height: height,
    border: border,
    background: theme.colors.background[sidebarBackground],
    // background: "red",
    display: display,
    flexDirection: flexDirection,
    alignItems: alignItems,
    justifyContent: justifyContent,
    padding: padding,
    paddingInline: paddingInline,
    paddingBlock: paddingBlock,
    width: width,
    paddingBottom: paddingBottom,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    overflow: overflow,
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
        marginBottom: '0.5rem',
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

    },
    // ----------------------------------------------
    // 2.  TaskTimelineHeader css
    // ----------------------------------------------
    "&.day-overviewBox": {
        backgroundImage: theme.colors.gradients.slateFade,
        backdropFilter: theme.blur.sm,
        borderRadius: theme.borderRadius.card,
        border: `1px solid ${theme.colors.gradients.border.slate700_50}`,
        boxShadow: theme.shadow.cardElevated,

        "& .calenderBox": {
            border: `1px solid ${theme.colors.gradients.border.cyan30}`,
            backgroundImage: theme.colors.gradients.calenderBoxGradientBg,
            borderRadius:"0.5rem"

        }

    },
    "& .date":{
        fontSize: theme.typography.fontSize.lg,
        
    },
    "& .sud-text":{
        fontSize: theme.typography.fontSize.tiny,

    }


}))

export default CustomBox;