import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router()


// GET /movies/new
router.get('/new', reviewsCtrl.new)

export {
	router
}