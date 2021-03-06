import React, { useState } from 'react'

import photo from '../../assets/small/front-end/react.mental-health.PNG'

// array of objects that connect to respective photos
const ProjectList = ({ category }) =>{
    
    const [photos] = useState([
        {
            name: 'park-finder',
            category: 'front end',
            description: 'A website that searches for national parks'
        },
        {
            name: 'mental-health-app',
            category: 'frontend',
            description: 'an application that guides you through a simple breathing exercise.'
        }
    ]);

    // variable that holds current photo of application example
    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>

            <img src={photo} alt="Frontend Example"/>
            
        </div>
        
    )
}

export default ProjectList;