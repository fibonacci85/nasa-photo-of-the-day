import React from 'react';

const MainBox = (props) => {

    const {dailyPhoto} = props

    console.log(props.dailyPhoto.copyright)

    const nasaData = props.dailyPhoto



    return (

    
    <div className='mainbox'>

        <h1>NASA DAILY</h1>

    <h2>{nasaData.title}</h2>
    <h3>Date: {nasaData.date}</h3>
    <p className='about'> About: {nasaData.explanation}</p>
    <img alt = 'deep space' src = {nasaData.url}/>
    <p className='copyright'>Copyright: {nasaData.copyright}</p>
    </div>


    )
}

export default MainBox;