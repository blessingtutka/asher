import React from 'react';
import { Link } from 'react-router-dom';
interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageBannerProps {
    title: string;
    breadcrumbs: Breadcrumb[];
}

const PageBanner: React.FC<PageBannerProps> = ({ title, breadcrumbs }) => {
    return (
        <div className='w-full banner bg-primary text-white py-16 px-4'>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <nav className='mt-4'>
                    <ol className='list-reset flex text-sm'>
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index}>
                                {crumb.href ? (
                                    <Link to={crumb.href} className='text-white hover:text-tertiary'>
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span>{crumb.label}</span>
                                )}
                                {index < breadcrumbs.length - 1 && <span className='mx-2'>/</span>}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default PageBanner;
