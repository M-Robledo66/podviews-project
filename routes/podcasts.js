import { Router } from 'express'
import * as podcastsCtrl from "../controllers/podcasts.js"

const router = Router()



router.get('/', podcastsCtrl.index)

router.get('/new', podcastsCtrl.new)

router.post('/', podcastsCtrl.create)

router.get('/:id', podcastsCtrl.show)

router.delete("/:id", podcastsCtrl.delete)

router.get("/:id/edit", podcastsCtrl.edit)



export {
	router
}