import spinner from '/spinner.gif';

export default function Loading() {
    return (
        <div>
            <div className='w-full h-full flex justify-center items-center flex-grow p-3'>
                <img className='h-8 mx-auto' src={spinner} alt='Spinner' />
            </div>
        </div>
    );
}
