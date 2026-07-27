import React from 'react'
import LeftContent from './leftContent.jsx'
import RightContent from './RightContent.jsx'


const Page1content = (props) => {
    return (
        <div className='py-3 px-18 flex justify-between h-[calc(100vh-140px)] items-stretch'>
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default Page1content

