import { Router } from 'express'
import controllers from './items.controllers'

const router = Router()
const mockController = (req, res) => {
  res.json({ message: 'ok' })
}

router.route('/').get(mockController).post(mockController)

router
  .route('/:id')
  .get(controllers.getOne)
  .put(mockController)
  .delete(mockController)

export default router
