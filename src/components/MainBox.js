import React from 'react';

const MainBox = (props) => {

    const {dailyPhoto} = props

    console.log(props.dailyPhoto.copyright)



    return (

    
    <div className='mainbox'>
        <h1>NASA DAILY</h1>
    </div>


    )
}

export default MainBox;