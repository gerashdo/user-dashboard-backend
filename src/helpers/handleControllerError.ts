import { Response } from "express"

export const handleControllerError = ( res: Response, error: unknown ) => {
  console.log(getErrorMessage(error))
  res.status( 500 ).json({
      msg: 'Ocurrio un error, comunicate con el administrador'
  })
}

function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message
	return String(error)
}
