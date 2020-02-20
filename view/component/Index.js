import React from 'react'

import CScroll from '../../index'
import './Index.scss'
const Index = () => {
    React.useEffect(()=>{
        let scroll = new CScroll('.scroll',{
            scrollX:false
        })
        scroll.on('scroll',(ev)=>{
            console.log(ev)
        })
    },[])
    return (
        <div className='index'>
            <div className='scroll'>
                <ul className='content'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div>
    )
}

export default Index