import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeaderContext } from '../../../context/HeaderContext';

interface animatedNavProps {
    children: React.ReactNode;
}

const menuVars = {
    initial: {
        scaleY: 0,
        opacity: 0,
    },
    animate: {
        scaleY: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.68, -0.55, 0.27, 1.55],
        },
    },
    exit: {
        scaleY: 0,
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: [0.68, -0.55, 0.27, 1.55],
        },
    },
};

const containerVars = {
    initial: {
        transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
        },
    },
    open: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
        },
    },
};

// AnimateNav Component
const AnimateNav: React.FC<animatedNavProps> = ({ children }) => {
    const { mobileNav, click } = useHeaderContext();
    const className = `nav ${click ? 'active' : ''}`;
    return mobileNav ? (
        <AnimatePresence>
            {click && (
                <motion.nav
                    aria-expanded={click}
                    className={className}
                    variants={menuVars}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    // transition={expandingTransition}
                >
                    <motion.div
                        variants={containerVars}
                        initial='initial'
                        animate='open'
                        exit='initial'
                        className='flex flex-col w-full h-full justify-center font-lora items-center gap-4 z-[100]'
                    >
                        {children}
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    ) : (
        <nav className={className}>{children}</nav>
    );
};

export default AnimateNav;
