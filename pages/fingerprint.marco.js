import React from 'react';
import { startPlayground } from '../fingerprintjs/playground';
// import { ClientJS } from 'clientjs';

export default function FingerPrintLucas() {
    React.useEffect(() => {
        startPlayground();
    }, []);

    return <p className='output'>Getting the visitor identifier..</p>
}