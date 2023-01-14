import React from 'react';

import TechnologyBlip from './TechnologyBlip';

import ReactLogo from './Logos/React.png';
// import JS from './Logos/JS.png';
import TS from './Logos/TS.png';
// import HTML from './Logos/HTML.png';
// import CSS from './Logos/CSS.png';
import Redux from './Logos/Redux.png';
// import Context from './Logos/Context.png';
import Webpack from './Logos/Webpack.png';
import Jest from './Logos/Jest.png';


export default function FrontendBlips() {
  return (
    <React.Fragment>
        <TechnologyBlip pic={ReactLogo} picAlt="React Logo">React.js</TechnologyBlip>

        {/* <TechnologyBlip pic={JS} picAlt="Javascript Logo">Javascript</TechnologyBlip> */}

        <TechnologyBlip pic={TS} picAlt="Typescript Logo">Typescript</TechnologyBlip>
        
        {/* <TechnologyBlip pic={HTML} picAlt="HTML Logo">HTML</TechnologyBlip>
        
        <TechnologyBlip pic={CSS} picAlt="CSS Logo">CSS</TechnologyBlip> */}

        <TechnologyBlip pic={Jest} picAlt="Jest Logo">Jest</TechnologyBlip>

        <TechnologyBlip pic={Redux} picAlt="Redux Logo">Redux</TechnologyBlip>

        {/* <TechnologyBlip pic={Context} picAlt="Context Logo">Context</TechnologyBlip> */}

        <TechnologyBlip pic={Webpack} picAlt="Webpack Logo">Webpack</TechnologyBlip>
    </React.Fragment>
  )
}
