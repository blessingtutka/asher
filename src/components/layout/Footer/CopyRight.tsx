import { Link } from 'react-router-dom';
export default function CopyRight() {
    return (
        <div className='text-center order-2 md:order-1 md:text-left'>
            <p>
                &copy;{new Date().getFullYear()}{' '}
                <Link to='/' className='footer-link'>
                    Asher
                </Link>
            </p>
        </div>
    );
}
