import React from 'react';
import Title from './Title';
import Action from './Action';
import { Text } from '../../Common';
const Right: React.FC = () => {
    return (
        <div className='w-full h-full md:w-1/2 mlg:w-3/5 flex flex-col'>
            <Title />
            <Text>
                Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim
                habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla Et purus duis
                sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas
                nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla
            </Text>
            <Action />
        </div>
    );
};

export default Right;
