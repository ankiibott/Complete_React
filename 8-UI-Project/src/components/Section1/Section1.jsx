import React from 'react'
import Navbar from './Navbar'
import Page1content from './Page1content'

const Section1 = (props) => {
    return (
        <div className='h-screen w-full flex flex-col justify-between overflow-hidden pb-6'>
            <Navbar />
            <Page1content users={props.users} />
        </div>
    )
}

export default Section1