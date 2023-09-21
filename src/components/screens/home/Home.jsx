import { useState } from 'react'
import workoutLogo from '../../../../public/workout.svg'
import Layout from '../../layout/Layout'

function Home() {
	const [count, setCount] = useState(0)
	return (
		<>
			<Layout heading='asdads'>
				<div className='Home'>
					<a target='_blank'>
						<img src={workoutLogo} className='logo' alt='Vite logo' />
					</a>
				</div>
				<h1>Vite + Reacasdasdt</h1>
				<div className='card'>
					<button onClick={() => setCount(count => count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
			</Layout>
		</>
	)
}

export default Home
