import About from './About';
import Service from './Service';
import Job from './Job';
import ReadyToStart from './ReadyToStart';
export default function Home() {
    return (
        <div className='my-5 flex flex-col justify-center items-center'>
            <About />
            <Service />
            <Job />
            <ReadyToStart />
        </div>
    );
}
