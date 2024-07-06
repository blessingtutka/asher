import About from './About';
import Service from './Service';
export default function Home() {
    return (
        <div className='row'>
            <div className='col-12 my-5'>
                <About />
                <Service />
            </div>
        </div>
    );
}
