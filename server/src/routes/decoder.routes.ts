import * as controller from '../modules/controllers/_index'
import { Router } from 'express'

const decode = new controller.DecoderController()
const decoderRoute = Router()


export { decoderRoute }