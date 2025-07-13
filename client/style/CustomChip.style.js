'use client'
import { Chip } from "@mui/material";
import styled from "@emotion/styled";
import theme from "@/utils/theme";

const CustomChip = styled(Chip)(({ }) => ({
    color: theme.colors.text.chipText,
    fontWeight: theme.typography.fontWeight.bold,
    "&.task-Completed": {
        background: theme.colors.status.completed,
        borderRadius: '10px'
    },
    "&.task-priority-low": {
        background: theme.colors.priority.low,
        borderRadius: '10px'

    },
    // -------------------------------
    // chip styles for pending chip
    // -------------------------------
    "&.task-pending":{
        backgroundImage: theme.colors.status.pendding,
        borderRadius: '10px'
        
    },
    // -------------------------------
    // chip styles for in pogress chip
    // -------------------------------
    "&.task-inprogress":{
        background: theme.colors.status.inProgress,
        borderRadius: '10px'
        
    }
}))

export default CustomChip;