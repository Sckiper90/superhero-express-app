import Router from 'express'
import HeroInfoController from './HeroInfoController.js'

const router = new Router() //создание екземпляра роутера

router.post('/heroinfo', HeroInfoController.create)
router.get('/heroinfo', HeroInfoController.getAll)
router.get('/heroinfo/:id', HeroInfoController.getOne)
router.put('/heroinfo', HeroInfoController.update)
router.delete('/heroinfo/:id', HeroInfoController.delete)

export default router;