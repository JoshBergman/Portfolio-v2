import React from 'react';

import TechnologyBlip from './TechnologyBlip';

import MongoDB from './Logos/MongoDB.png';
// import JS from './Logos/JS.png';
// import TS from './Logos/TS.png';
import NodeJS from './Logos/NodeJS.png';
import GraphQL from './Logos/GraphQL.png';
import Rest from './Logos/RestAPI.png';
import ExpressJS from './Logos/ExpressJS.png';
// import Python from './Logos/Python.png';


export default function FrontendBlips() {
  return (
    <React.Fragment>
        <TechnologyBlip pic={MongoDB} picAlt="Mongo DB Logo">MongoDB</TechnologyBlip>

        <TechnologyBlip pic={ExpressJS} picAlt="Express Logo">Express.js</TechnologyBlip>

        <TechnologyBlip pic={NodeJS} picAlt="Node JS Logo">Node.js</TechnologyBlip>
        
        {/* <TechnologyBlip pic={JS} picAlt="Javascript Logo">Javascript</TechnologyBlip>

        <TechnologyBlip pic={TS} picAlt="Typescript Logo">Typescript</TechnologyBlip> */}
        
        <TechnologyBlip pic={Rest} picAlt="REST API Logo">Rest API</TechnologyBlip>

        <TechnologyBlip pic={GraphQL} picAlt="GraphQL API Logo">GraphQL</TechnologyBlip>

        {/* <TechnologyBlip pic={Python} picAlt="Python Logo">Python</TechnologyBlip> */}
    </React.Fragment>
  )
}