import JobCarousel from './JobCarousel';
import { Title } from '../../Common';
export default function Job() {
    return (
        <div className='w-full md:w-[97%] my-8 md:rounded-xl p-8 bg-primary flex flex-col items-center'>
            <div className='w-content'>
                <Title subtitle='Features jobs' className='!text-white !text-left'>
                    Find Opportunities to Work with Great Companies
                </Title>
                <JobCarousel />
            </div>
        </div>
    );
}
