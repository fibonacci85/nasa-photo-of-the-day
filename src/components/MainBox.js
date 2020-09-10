import React from 'react';

const MainBox = (props) => {

    const {dailyPhoto} = props
    console.log(props.dailyPhoto.copyright)
    

    return (

    <div className='mainbox'>

        <h1>NASA DAILY</h1>

    <h2>{dailyPhoto.title}</h2>
    <h3>Date: {dailyPhoto.date}</h3>
    <p className='about'> About: {dailyPhoto.explanation}</p>
    <img alt = 'deep space' src = {dailyPhoto.url}/>
    <p className='copyright'>Copyright: {dailyPhoto.copyright}</p>
    </div>

    )
}

export default MainBox;