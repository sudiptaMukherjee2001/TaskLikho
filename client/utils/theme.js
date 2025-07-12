// theme.js

const theme = {
    colors: {
        background: {
            main: "#0D1117", // Main dark background
            sidebar: "linear-gradient(to bottom, #0f172a, #111827, #0f172a)", // Sidebar background
            card: "#1f2937", // Default card background
            overlay: "rgba(255, 255, 255, 0.05)", // Optional overlays
            cardStatusBackgroundCompleted: "linear-gradient(to bottom right, #6ee7b7, #34d399, #059669)",   // Dark green for completed tasks
            cardStatusBackgroundInProgress: "#3b3b3b",  // Dark gray for in-progress tasks
            taskDisplayBackground: "rgba(0, 0, 0, 0.2)",


        },



        text: {
            primary: "#ffffff",      // Main white text
            secondary: "#d1d5db",    // Light gray for secondary text
            muted: "#9ca3af",        // Dimmed for labels etc
            faded: "#6b7280",        // Sidebar faded labels
            sidebar: "#e5e7eb",      // Sidebar text color, task color also
            link: "#3b82f6",         // For clickable links
            chipText: "oklch(20.8% 0.042 265.755)",
            gradientText: "linear-gradient(to right, #38bdf8, #8b5cf6)", // NEXUS title gradient
            completedTaskHeader: "linear-gradient(to right, #34d399, #22c55e, #14b8a6)",
            pendingTaskHeader: "linear-gradient(to right, #fbbf24, #f97316, #ca8a04)"
        },
        gradients: {
            sideItemsColor: {
                backgroundImage: "linear-gradient(to right, rgba(6,182,212,0.2), rgba(59,130,246,0.2), rgba(147,51,234,0.2))",
                color: "rgba(103, 232, 249, 1)"//cyan
            },
            border: {
                cyan30: "rgba(6, 182, 212, 0.3)", // border-cyan-500/30
                slate700_50: "rgba(51, 65, 85, 0.5)",
                cyan500_30: "rgba(6, 182, 212, 0.3)"
            },
            decorative: {
                line: 'linear-gradient(to right, #4299e1, #9f7aea)',
            },
            cyanToPurple: "linear-gradient(to right, rgba(6,182,212,0) 0%, rgba(6,172,237,0.3) 22%, oklch(70.4% 0.04 256.788) 64%,rgba(6,172,237,0.3) 75%, rgba(147,51,234,0) 100%)",
            slateFade: "linear-gradient(to right, rgba(30, 41, 59, 0.8), rgba(31, 41, 55, 0.8), rgba(30, 41, 59, 0.8))",
            calenderBoxGradientBg: "linear-gradient(to bottom right, rgba(6, 182, 212, 0.2), rgba(37, 99, 235, 0.2))",
            taskCompletedCard: "linear-gradient(to bottom right, #6ee7b7, #34d399, #059669)",
            darkBlurCard: "linear-gradient(to bottom right, #0f172a, #111827, #0f172a)"

        },

        status: {
            completed: "#10b981",    // Green dot/text
            inProgress: "#facc15",   // Yellow
            pendding:"linear-gradient(to right, rgba(245, 158, 11, 0.3), rgba(249, 115, 22, 0.3))"
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
            sidebarItemSize: "1rem",        // For NEXUS
            heading: "2rem",       // For page headings like "Task Timeline"
            subheading: "1.25rem", // Smaller headings like card titles
            body: "1rem",          // Main content
            label: "0.875rem",     // Tags and status labels
            tiny: "0.75rem",       // Dates etc.

            sm: "0.875rem",      // text-sm (14px)
            base: "1rem",        // text-base (16px)
            lg: "1.125rem",      // text-lg (18px)
            xl: "1.25rem",       // text-xl (20px)
            "2xl": "1.5rem",     // text-2xl (24px)
            "3xl": "1.875rem",   // text-3xl (30px)
            "4xl": "2.25rem",    // text-4xl (36px)
            "5xl": "3rem",       // text-5xl (48px)
            "6xl": "3.75rem",    // text-6xl (60px)
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
        cardElevated: `
    0 20px 25px -5px rgba(0, 0, 0, 0.1), 
    0 10px 10px -5px rgba(0, 0, 0, 0.04)
  `,
    },
    blur: {
        sm: "blur(4px)",
        xl: "blur(20px)",
    },
    filter: {
        dropShadow: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05))"
    },
    glass: {
        greenCard: {
            background: " linear-gradient(to bottom right,rgba(34, 211, 238, 0.1),rgba(16, 185, 129, 0.1))",
            blur: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            shadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            glow: `
      0 0 8px rgba(16, 185, 129, 0.15),
    0 0 18px rgba(16, 185, 129, 0.07),
    0 0 30px rgba(16, 185, 129, 0.04)
    `
        },
        completedTaskCard: {
            background: "linear-gradient(to bottom right, rgba(6, 95, 70, 0.4), rgba(20, 83, 45, 0.3), rgba(19, 78, 74, 0.4))",
            backdropFilter: "blur(4px)",
            borderRadius: "1rem",
            padding: "1.5rem",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            boxShadow: `
          0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04)
        `
        },
        activeDayTaskCard: {
            background: "linear-gradient(to bottom right,rgba(22, 78, 99, 0.4),rgba(30, 58, 138, 0.3),rgba(22, 78, 99, 0.4))",
            backdropFilter: "blur(4px)",
            borderRadius: "1rem",
            padding: "1.5rem",
            border: "1px solid rgba(6, 182, 212, 0.2)",
            boxShadow: `
        0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04)
        `
        },
        avgDayTaskCard: {
            background: "linear-gradient(to bottom right, rgba(120, 53, 15, 0.4), rgba(124, 45, 18, 0.3), rgba(120, 53, 15, 0.4) )",
            backdropFilter: "blur(4px)",
            borderRadius: "1rem",
            padding: "1.5rem",
            border: " 1px solid rgba(245, 158, 11, 0.2)",
            boxShadow: `
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04)
        `
        },
        bestDayTaskCard: {
            background: "linear-gradient(to bottom right, rgba(76, 29, 149, 0.4), rgba(88, 28, 135, 0.3),rgba(49, 46, 129, 0.4))",
            backdropFilter: "blur(4px)",
            borderRadius: "1rem",
            padding: "1.5rem",
            border: " 1px solid rgba(139, 92, 246, 0.2)",
            boxShadow: `
       0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04)
        `
        },
        pendingTaskCard: {
            background: "linear-gradient(to bottom right, rgb(120 53 15), rgb(154 52 18 / 81%), rgb(202 138 4 / 55%))",
            boxShadow:" 0 10px 15px rgba(0,0,0,0.1)"
        }

    }
};

export default theme;
