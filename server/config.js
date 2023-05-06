import dotenv from 'dotenv'

dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://marielboher97:dakota12345@mernstack3.sz5vfcv.mongodb.net/"

export const PORT = process.env.PORT || 4000