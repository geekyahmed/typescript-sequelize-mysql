import { Response } from 'express'
import { HttpCodes } from '../constants'

const sendResponse = (res: Response, statusCode: HttpCodes, msg: string, data?: object | any) => {
    return res
        .status(statusCode)
        .json({
            statusCode,
            msg,
            data
        })
}

export { sendResponse }