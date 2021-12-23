import {setError} from 'components/Top10ScenicSpotsIns/redux/reducers/errorSlice'
import {isEmptyObj} from 'components/shared/util'

export function parserException(error) {
  if (error.name === 'FetchBackendDataError') {
    const {code, text} = JSON.parse(error.message)
    try {
      const {message, faults} = JSON.parse(text)
      return {code, message, faults}
    } catch {
      return {code}
    }
  }

  return {code: 503, message: error.message}
}

export const ErrorType = {
  BusinessError: 'BusinessError',
  Other: 'Other'
}

export function getErrorType(err) {
  if (isEmptyObj(err)) return null
  if (err.code === '417') {
    return ErrorType.BusinessError
  }
  return ErrorType.Other
}

export async function HandleError(requestPromise, dispatch) {
  let response

  try {
    response = await requestPromise
  } catch (error) {
    const err = parserException(error)
    if (err.code === '401') {
      // router.push({
      //   pathname: RoutePath.Login,
      //   query: {from: asPath}
      // })
    } else {
      dispatch(setError(err))
    }
  }
  return response
}
