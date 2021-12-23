export default class FetchBackendDataError extends Error {
  constructor(message) {
    super(message)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchBackendDataError)
    }
    this.name = 'FetchBackendDataError'
    this.date = new Date()
  }
}
