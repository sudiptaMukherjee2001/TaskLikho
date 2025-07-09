'use client';
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledRightsideContentGrid = styled(Grid)(({ }) => ({
    // border: '2px solid yellow',/
    paddingBlock: '1.8rem',
    paddingInline:"1.8rem",
    maxHeight: '100vh',
    minHeight: '100vh',
    overflow: 'auto',
    scrollbarWidth: 'none', // Firefox
    '&::-webkit-scrollbar': {
        display: 'none', // Chrome/Safari
    },
}))