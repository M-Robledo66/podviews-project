import { Router } from 'express'
import * as podcastsCtrl from "../controllers/podcasts.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()



router.get('/', podcastsCtrl.index)

router.get('/new', podcastsCtrl.new)

router.post('/', isLoggedIn, podcastsCtrl.create)

router.get('/:id', podcastsCtrl.show)

router.delete("/:id", isLoggedIn, podcastsCtrl.delete)

router.get("/:id/edit", podcastsCtrl.edit)

router.put("/:id", podcastsCtrl.update)

router.post('/:id/reviews', podcastsCtrl.createReview)

export {
	router
}