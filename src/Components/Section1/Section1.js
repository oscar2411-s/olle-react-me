import React from 'react';
import './Section1.css';
import {ReactComponent as PilNed} from '../../Assets/Icons/down-arrow.svg';

class Section1 extends React.Component{
    render(){
        return(
            <div className='section1'>
                <h2 className='overskrift'>Olle.me</h2>
                <PilNed></PilNed>
            </div>
        );
    }
}

export default Section1;