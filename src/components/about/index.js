import React from 'react';
import coverImage from "../../assets/about/portfolio-01.jpg";


function About() {
    return (
            <section className="my-5">
                <center>
                <h1 id="about">Who I Am:</h1>
                <img src={coverImage} className="my2" style={{ width: "25%" }} alt="cover" />
                <p>
                    Introductions:<br></br>
                    Hi there! My Name is Kyle McKinley and I am an aspiring full-stack web developer.<br></br>
                    <br></br>
                    
                    Born and Raised: Austin, Texas<br></br>
                    <br></br>

                    When I'm not coding, I like to:<br></br>
                    Play Dungeons and Dragons, listen to and play new music (guitar, keys), 
                    golf (when I have the time and money), read comics, watch all the nerdiest shows. <br></br>
                    <br></br>
                </p>
                </center>
            </section>
    );
}

export default About;
