import React from 'react'

import CScroll from '../../index'
import './Index.scss'
const Index = () => {
    React.useEffect(()=>{
        let scroll = new CScroll('.scroll',{
            scrollX:false
            
        })

    },[])
    return (
        <div className='index'>
            <div className='scroll'>
                <ul className='content'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Index