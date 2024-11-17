import React from 'react';
import imgSrc from '../../assets/images/personal-img.jpg';

const PersonalPhoto = () => {
        return (
           <img src={imgSrc} alt="personal-photo" className='xs:w-[40%] sm:w-[140px]  sm:rounded-full sm:absolute left-[20px] top-[20px]'/>
        );
}

export default PersonalPhoto;