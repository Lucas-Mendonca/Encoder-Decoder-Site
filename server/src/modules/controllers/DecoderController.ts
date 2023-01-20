import * as service from '../services/decoderServices/_index'
import { Request, Response } from 'express'

export default class DecoderController {
    
    binary(request: Request, response: Response) {
        const { text, spaced } = request.body
        service.binaryDecoder(text, spaced)
    } 

}