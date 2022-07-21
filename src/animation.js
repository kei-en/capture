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
            when: 'beforeChildren',
            staggerChildren: 0.25,
        },
    },
    exit: {
        scale: 0.95,
        transition: {
            duration: 0.4,
        },
    },
};

export const titleAnim = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut',
        }
    }
};

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.75,
        },
    },
};

export const imageAnim = {
    hidden: {
        scale: 1.5,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.75,
        },
    },
};

export const lineAnim = {
    hidden: {
        width: '0%',
    },
    show: {
        width: '100%',
        transition: {
            duration: 1,
        }
    }
};

export const slider = {
    hidden: {
        x: '-135%',
        skew: '45deg',
    },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    }
};

export const sliderContainer = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            ease: 'easeOut'
        }
    }
};

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.1,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        }
    }
}