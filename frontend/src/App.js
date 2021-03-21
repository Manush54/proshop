import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import HomeScreen from '../src/Screens/HomeScreen'

function App() {
	return (
		<>
			<Header />
			<main>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
