import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import './App.css';
import particlesOptions from './particles.json';

function ParticlesComponent() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		if (init) {
			return;
		}

		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, [init]);
	return <Particles options={particlesOptions} />;
}

export default ParticlesComponent;
