import React, { Component } from 'react'

export default function MoreEffect(props) {
    const [test, setTest] = React.useState();
    const [test2, setTest2] = React.useState();
    React.useEffect(() => {
        console.log('effect was called')
        setTest2('test2');
        console.log('set test 2 called')
        setTest('test');
        console.log('set test 1 called')
    }, [test])
    return <div>Test</div>;
}
