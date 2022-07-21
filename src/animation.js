export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'anticipate',
            velocity: 2,
        },
    },
    exit: {
        scale: 0.95,
        y: 0,
        transition: {
            duration: 0.4,
        },
    },
};