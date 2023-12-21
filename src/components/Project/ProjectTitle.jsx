import React from 'react';
import './ProjectTitle.css'

export default function ProjectTitle({title}) {
	return (
		<h2 className='project_title'>
			{title}
		</h2>
	);
}

