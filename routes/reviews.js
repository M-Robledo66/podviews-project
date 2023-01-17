import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router()


// GET /movies/new
router.get('/', reviewsCtrl.index)

// router.get('/new', reviewsCtrl.new)


// router.get('/:id', reviewsCtrl.show)

export {
	router
}