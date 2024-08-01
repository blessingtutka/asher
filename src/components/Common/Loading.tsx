import spinner from '/spinner.gif';

export default function Loading({ className }: { className?: string }) {
    return (
        <div>
            <div className='w-full h-full flex justify-center items-center flex-grow p-3'>
                <img className={'h-8 mx-auto ' + className} src={spinner} alt='Spinner' />
            </div>
        </div>
    );
}
