// theme.js

const theme = {
    colors: {
        background: {
            main: "#0D1117", // Main dark background
            sidebar: "linear-gradient(132deg, #0e182b, #2a3649)", // Sidebar background
            card: "#1f2937", // Default card background
            overlay: "rgba(255, 255, 255, 0.05)", // Optional overlays
        },

        cardStatusBackground: {
            completed: "#064e3b",   // Dark green for completed tasks
            inProgress: "#3b3b3b",  // Dark gray for in-progress tasks
        },

        text: {
            primary: "#ffffff",      // Main white text
            secondary: "#d1d5db",    // Light gray for secondary text
            muted: "#9ca3af",        // Dimmed for labels etc
            faded: "#6b7280",        // Sidebar faded labels
            sidebar: "#e5e7eb",      // Sidebar text color
            link: "#3b82f6",         // For clickable links

            brandGradient: "linear-gradient(to right, #38bdf8, #8b5cf6)", // NEXUS title gradient
        },
        gradients: {
            sideItemsColor: {
                backgroundImage: "linear-gradient(to right, rgba(6,182,212,0.2), rgba(59,130,246,0.2), rgba(147,51,234,0.2))",
                color: "rgba(103, 232, 249, 1)"//cyan
            },
            border: {
                cyan30: "rgba(6, 182, 212, 0.3)", // border-cyan-500/30
            },
            decorative: {
                line: 'linear-gradient(to right, #4299e1, #9f7aea)',
            },
           cyanToPurple: "linear-gradient(to right, rgba(6,182,212,0) 0%, rgba(6,172,237,0.3) 22%, oklch(70.4% 0.04 256.788) 64%,rgba(6,172,237,0.3) 75%, rgba(147,51,234,0) 100%)",
        },

        status: {
            completed: "#10b981",    // Green dot/text
            inProgress: "#facc15",   // Yellow
        },

        priority: {
            high: "#ef4444",     // Red
            medium: "#f97316",   // Orange
            low: "#22c55e",      // Green
        },
    },

    typography: {
        fontFamily: "'Inter', sans-serif",

        fontSize: {
            logo: "2.2rem",        // For NEXUS
            sidebarItemSize: "1.3rem",        // For NEXUS
            heading: "2rem",       // For page headings like "Task Timeline"
            subheading: "1.25rem", // Smaller headings like card titles
            body: "1rem",          // Main content
            label: "0.875rem",     // Tags and status labels
            tiny: "0.75rem",       // Dates etc.
        },

        fontWeight: {
            bold: 700,
            medium: 500,
            regular: 400,
        },
    },

    spacing: {
        sidebarWidth: "280px",
        paddingLarge: "2rem",
        paddingMedium: "1.25rem",
        paddingSmall: "0.75rem",

        cardGap: "1.5rem",
        sidebarItemGap: "1rem",
    },

    borderRadius: {
        card: "1rem",
        button: "0.75rem",
        tag: "9999px", // Pill style
    },

    shadow: {
        card: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        sidebarActive: `
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -4px rgba(0, 0, 0, 0.1),
        0 0 8px rgba(6, 182, 212, 0.1)`,
        floatingButton: "0px 4px 20px rgba(59, 130, 246, 0.5)",
    },
};

export default theme;
