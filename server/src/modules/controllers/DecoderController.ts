import * as service from '../services/decoderServices/_index'
import { Request, Response } from 'express'

export default class DecoderController {
    
    binary(request: Request, response: Response) {
        const { text, spaced } = request.body
        const decodedText = service.binaryDecoder(text, spaced)

        return response.status(200).json(decodedText)
    } 

}