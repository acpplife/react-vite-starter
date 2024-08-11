import { Link } from 'react-router-dom'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
	return (
		<div className="app">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>React Starter</h1>
			<div className="card">
				<Link to="/router">Router</Link>
				<Link to="/redux">Redux</Link>
			</div>
		</div>
	)
}

export default App
