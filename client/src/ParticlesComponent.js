import React from 'react';
import Particles from '@tsparticles/react';

import './App.css';
import particlesOptions from './particles.json';

function ParticlesComponent() {
	return <Particles options={particlesOptions} />;
}

export default ParticlesComponent;
