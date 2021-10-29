export function covertSeconds2MinSecs(seconds) {
  let mins = parseInt(seconds / 60, 10)
  mins = mins < 10 ? `0${mins}` : mins
  let secs = parseInt(seconds % 60, 10)
  secs = secs < 10 ? `0${secs}` : secs
  return `${mins}:${secs}`
}
