import React from 'react';
import { motion } from 'framer-motion';

interface BackDropProps {
    isExpanded: boolean;
}

const backdropVariants = {
    expanded: {
        width: '233%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(60deg)',
        zIndex: 100,
    },
    collapsed: {
        width: '160%',
        height: '0',
        borderRadius: '50%',
        transform: 'rotate(60deg)',
        zIndex: 2,
    },
};

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30,
};

const BackDrop: React.FC<BackDropProps> = ({ isExpanded }) => {
    return (
        <motion.div
            className='absolute w-[160%] h-0 flex flex-col rounded-full top-[-280px] left-[-70px] rotate-[60deg] bg-primary'
            variants={backdropVariants}
            initial='collapsed'
            animate={isExpanded ? 'expanded' : 'collapsed'}
            transition={expandingTransition}
        />
    );
};

export default BackDrop;
