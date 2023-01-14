import React from 'react';

import TechnologyBlip from './TechnologyBlip';

import Mongosh from './Logos/Mongosh.png';
import Postman from './Logos/Postman.png';
import Git from './Logos/Git.png';
import Webpack from './Logos/Webpack.png';

export default function FrontendBlips() {
  return (
    <React.Fragment>
        <TechnologyBlip pic={Mongosh} picAlt="Mongosh Logo">Mongosh</TechnologyBlip>

        <TechnologyBlip pic={Postman} picAlt="Postman Logo">Postman</TechnologyBlip>

        <TechnologyBlip pic={Git} picAlt="Git Logo">Git</TechnologyBlip>
        
        <TechnologyBlip pic={Webpack} picAlt="Webpack Logo">Webpack</TechnologyBlip>
    </React.Fragment>
  )
}