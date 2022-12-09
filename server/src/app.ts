import Express, { Request, Response, NextFunction } from 'express'
import * as route from './routes/_index'
import { appError } from './error';

const port = 3333;
const app = Express();


app.use('/decoder', route.decoderRoute);
app.use('/encoder', route.encoderRoute);


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof appError) {
        return response.status(err.errorCode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        errorCode: 'error',
        message: `Internal server error :: ${err.message}`
    })
})
app.listen(port)