import React from 'react'

import CScroll from '../../index'
import './Index.scss'
const Index = () => {
    React.useEffect(()=>{
        new CScroll('.scroll',{
            scrollX:false
            
        })
    },[])
    return (
        <div className='index'>
            <div className='scroll'>
                <div className='content'></div>
            </div>
        </div>
    )
}

export default Index