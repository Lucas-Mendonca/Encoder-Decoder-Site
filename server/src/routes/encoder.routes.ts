import * as controller from '../modules/controllers/_index'
import { Router } from 'express'

const encode = new controller.EncoderController()
const encoderRoute = Router()

encoderRoute.get('/')

export { encoderRoute }