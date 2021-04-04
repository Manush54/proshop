//Seeding(Feeding the data to the database by linking model files as well as data )
//The await operator is used to wait for a Promise . It can only be used inside an async function within regular JavaScript code.
//Import data is used to import all the data from backend.
//If the data already exists, first it is destroyed in order to avoid overlapping.
//Destroy data is used to destroy all the data in the backend.

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
	try {
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		const createdUsers = await User.insertMany(users)

		const adminUser = createdUsers[0]._id

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser }
		})

		await Product.insertMany(sampleProducts)

		console.log('Data Imported!'.green.inverse)
		process.exit()
	} catch (error) {
		console.error(`${error}`.red.inverse)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		console.log('Data Destroyed!'.red.inverse)
		process.exit()
	} catch (error) {
		console.error(`${error}`.red.inverse)
		process.exit(1)
	}
}

if (process.argv[2] === '-d') {
	destroyData()
} else {
	importData()
}
