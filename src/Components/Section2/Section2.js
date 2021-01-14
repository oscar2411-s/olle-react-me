import React from 'react';
import './Section1.css';
import {ReactComponent as PilNed} from '../../Assets/Icons/down-arrow.svg';

class Section1 extends React.Component{
    render(){
        return(
            <div className='section2'>
                <div className='cardbox'>
                    <div className='card'>
                        <h3 className='cardtitle'></h3>
                        <p className='cardcontent'></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1;