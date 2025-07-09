'use client';
import { styled } from '@mui/material/styles';
import theme from '@/utils/theme.js';


const CustomBox = styled('div')(({
    minHeight,
    maxHeight,
    height,
    border,
    background,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    rowGap,
    padding,
    paddingInline,
    paddingBlock,
    width,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginBottom,
    marginLeft,
    overflow,
    borderRadius,
    lineHeight


}) => ({
    border: border,
    borderRadius: borderRadius,
    minHeight: minHeight,
    maxHeight: maxHeight,
    height: height,
    background: theme.colors.background[background],
    // background: "red",
    display: display,
    flexDirection: flexDirection,
    alignItems: alignItems,
    justifyContent: justifyContent,
    rowGap: rowGap,
    padding: padding,
    paddingInline: paddingInline,
    paddingBlock: paddingBlock,
    paddingLeft: paddingLeft,
    width: width,
    paddingBottom: paddingBottom,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    overflow: overflow,
    lineHeight: lineHeight,

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
            height: '5px',
            width: "70%",
            background: theme.colors.gradients.decorative.line,
            borderRadius: '3px'
        }

    },
    // ----------------------------------------------
    // 3.  day-overviewBox css
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
            borderRadius: "0.5rem"

        }

    },
    "& .date": {
        fontSize: theme.typography.fontSize.lg,

    },
    "& .sud-text": {
        fontSize: theme.typography.fontSize.tiny,

    },
    // ----------------------------------------------
    // 4.  TASK Card css
    // ----------------------------------------------
    "&.task-card": {
        background: theme.glass.greenCard.background,
        backdropFilter: theme.glass.greenCard.blur,
        webkitBackdropFilter: theme.glass.greenCard.blur,
        border: theme.glass.greenCard.border,
        //boxShadow:theme.glass.greenCard.shadow,
        borderRadius: "1rem",
        padding: "1.5rem",
        color: theme.colors.text.primary,
        boxShadow: theme.glass.greenCard.glow
    },
    "& .task-name": {
        color: theme.colors.text.sidebar,
        fontSize: theme.typography.fontSize.label,
        fontWeight: theme.typography.fontWeight.medium,

    },

    "& .due-date": {
        display: "flex",
        alignItems: "center",
        fontSize: theme.typography.fontSize.sm,
        fontWeight: theme.typography.fontWeight.bold,
        marginTop: "0.5rem",
        "& .clock-icon": {
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.bold,
            marginRight: "0.2rem"
        }
    },
    // ----------------------------------------------
    // 5.  Complete page header
    // ----------------------------------------------
    "& .completed-task-timeline-header-typography": {
        fontSize: theme.typography.fontSize.heading,
        fontWeight: theme.typography.fontWeight.bold,
        background: theme.colors.text.completedTaskHeader,
        bacckgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        position: 'relative',
        marginBottom: '0.8rem',
        '&::after': {
            content: '""',
            position: 'absolute',
            left: '0px',
            bottom: '-10px',
            height: '5px',
            width: "70%",
            background: theme.colors.text.completedTaskHeader,
            borderRadius: '3px'
        }

    },
    "& .completed-task-timeline-sub-header-typography": {
        fontSize: theme.typography.fontSize.body,
        fontWeight: theme.typography.fontWeight.medium,


    },
    "& .taskPanel-overviewBox": {
        background: background
    },
    "&.CompletedOnDate": {
        color: "#6ee7b7",
        fontSize: theme.typography.fontSize.tiny,
        fontWeight: theme.typography.fontWeight.bold,
        marginTop: "0.9rem",
        // border:"2px solid red"
        display: "flex",
        alignItems: "center",
        columnGap: "0.2rem",
        "& .tick-icon": {
            fontSize: theme.typography.fontSize.label,
        }
    }

}))

export default CustomBox;