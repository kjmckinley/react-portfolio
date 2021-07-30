import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;


    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h1>
    
                    <span role="img" aria-label="camera"></span>
                    <center>Kyle McKinley</center>
                
            </h1>
            
        </header >
    );
}

export default Nav;