import * as service from '../services/encoderServices/_index'
import { Request, Response } from 'express-serve-static-core'

export default class EncoderController {

    binary(request: Request, response: Response) {
        const {text, spaced} = request.body
        const encodedText = service.binaryEncoder(text, spaced)

        return response.status(200).json(encodedText)
    }

    ASCII(request: Request, response: Response) {
        const {text} = request.body
        const encodedText = service.asciiEncoder(text)

        return response.status(200).json(encodedText)
    }
}