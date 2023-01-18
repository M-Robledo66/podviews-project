import { Router } from 'express'
import * as podcastsCtrl from "../controllers/podcasts.js"

const router = Router()



router.get('/', podcastsCtrl.index)


router.get('/new', podcastsCtrl.new)

// POST localhost:3000/movies
router.post("/", podcastsCtrl.create)



export {
	router
}