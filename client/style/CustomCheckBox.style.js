'use client'
import theme from '@/utils/theme';
import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export const CustomCheckBox= styled(Checkbox)(({})=>({
    color: "white",
     '&.Mui-checked': {
      color: theme.colors.status.completed
    },
}))