import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.route('/api/users/:userId')
    .get(authCrtl.requireSignin, userCtrl.read)
    .put(authCrtl.requireSignin, authCrtl.hasAuthorization, userCtrl.update)
    .delete(authCtrl.requireSignin, authCrtl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router
