import { Router } from 'express'
import * as podcastsCtrl from "../controllers/podcasts.js"

const router = Router()



router.get('/', podcastsCtrl.index)


router.get('/new', podcastsCtrl.new)




export {
	router
}