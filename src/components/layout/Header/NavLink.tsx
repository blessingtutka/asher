import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeaderContext } from '../../../context/HeaderContext';

const mobileLinkVars = {
    initial: {
        opacity: 0,
        y: 20,
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.68, -0.55, 0.27, 1.55],
        },
    },
};

interface NavLinkProps {
    title: string;
    href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title, href }) => {
    const { mobileNav, click } = useHeaderContext();
    const location = useLocation();
    const pathname = location.pathname || '/';
    const isActive = href === pathname;

    const className = `px-4 py-2 rounded-md text-sm lg:text-base font-semibold relative no-underline 
    duration-300 ease-in ${isActive ? 'text-secondary' : 'text-primary hover:text-secondary'}`;

    return mobileNav ? (
        <AnimatePresence>
            {click && (
                <motion.div variants={mobileLinkVars} className={className}>
                    <Link to={href}>{title}</Link>
                </motion.div>
            )}
        </AnimatePresence>
    ) : (
        <Link to={href} className={className} data-active={isActive}>
            {title}
        </Link>
    );
};

export default NavLink;
