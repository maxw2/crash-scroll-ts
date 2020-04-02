import React from 'react'

import { CScroll, Swiper } from '../../index'
import './Index.scss'
const Index = () => {
    React.useEffect(() => {
        console.dir(CScroll)
        let scroll = new CScroll('.scroll', {
            scrollX: false
        })
        let swiper = new CScroll('.swiper', {
            scrollX: true,
            // inertial:false
        })
        scroll.on('scroll',function (ev){
            console.log(this.$pos.y)
        })

        console.log(scroll)
    }, [])


    return (
        <div className='index'>
            <div className='scroll'>
                <ul className='content'>
                    <li className='swiper'>
                        <ul>
                            <li>一</li>
                            <li>二</li>
                            <li>三</li>
                        </ul>
                    </li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            {/* <div className='banner'>
                <ul>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                </ul>
            </div> */}
        </div>
    )
}

export default Index