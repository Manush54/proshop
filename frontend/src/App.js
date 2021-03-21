import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
function App() {
	return (
		<>
			<Header />
			<main>
				<Container>
					<h1 className='py-3'>Welcome to Proshop</h1>
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
