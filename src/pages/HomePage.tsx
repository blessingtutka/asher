import Home from '../components/home/Home';
import MainBanner from '../components/Common/MainBanner';

export default function HomePage() {
    return (
        <div className='w-full'>
            <MainBanner /> <Home />
        </div>
    );
}
