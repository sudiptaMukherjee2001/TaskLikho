import theme from "@/utils/theme";
import { Button, Dialog, Menu, styled, TextField } from "@mui/material";

const CustomDialogBox = styled(Dialog)(({ }) => ({

    "& .MuiPaper-root": {
        backgroundImage: theme.colors.gradients.darkBlurCard,
        border: `1.5px solid ${theme.colors.gradients.border.slate700_50}`,
        backdropFilter: theme.blur.xl,

    },
    "& .MuiDialogTitle-root": {
        fontSize: theme.typography.fontSize.heading,
        fontWeight: theme.typography.fontWeight.bold,
        background: theme.colors.text.gradientText,
        bacckgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        position: "relative",
        marginBottom: "0.8rem",
        '&::after': {
            content: '""',
            position: 'absolute',
            left: '25%',
            bottom: '0px',
            height: '3px',
            width: "50%",
            background: theme.colors.gradients.decorative.line,
            borderRadius: '4px'
        }

    },
    "& .MuiDialogContent-root": {
        scrollbarWidth: "none",
    },


}))
const StyledInput = styled(TextField)({
    marginBottom: '1.2rem',
    '& .MuiInputBase-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: '#fff',
        borderRadius: 8,
    },
    '& .MuiInputLabel-root': {
        color: '#ccc',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '&:hover fieldset': {
            borderColor: '#60a5fa',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
    },

});

const CancelTaskModal = styled(Button)({
    color: '#ccc',
    border: '1px solid #334155',
    borderRadius: '8px',
    padding: '0.5rem 1.5rem',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#1e293b',
        borderColor: '#475569',
    },

});
const CreateTaskBtn = styled(Button)({
    background: 'linear-gradient(to right, #3b82f6, #9333ea)',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '0.7rem',
    // marginTop: '1rem',
    textTransform: 'none',
    fontWeight: 600,
    '&:hover': {
        background: 'linear-gradient(to right, #2563eb, #7e22ce)',
    },
});

export {
    CustomDialogBox,
    StyledInput,
    StyledMenu,
    CreateTaskBtn,
    CancelTaskModal
};