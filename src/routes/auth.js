
//routes yang disediakan oleh /api akan melewati proses validasi apakah input nya valid, atau role yang dipegang pas untuk request yang akan dikasih
//register dan login akan melewati validation, lalu di validationMiddleware akan merespon jika ada error di validation tersebut, jika tidak dilanjutkan ke function yang memenuhi request tersebut
const {Router} = require('express')
const { getUsers, register, login, protected, logout} = require('../controllers/auth')
const { validationMiddleware} = require('../middlewares/validations-middleware')
const {registerValidation, loginValidation, roleCheck} = require('../validators/auth')
const {userAuth} = require('../middlewares/auth-middleware')
const router = Router()

module.exports = router

router.get('/get-users', roleCheck, validationMiddleware, getUsers)
router.get('/protected', userAuth,protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/registerAdmin', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.post('/loginAdmin', loginValidation, validationMiddleware, login)
router.get('/logout', logout)
