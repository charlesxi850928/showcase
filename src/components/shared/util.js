export function covertSeconds2MinSecs(seconds) {
  let mins = parseInt(seconds / 60, 10)
  mins = mins < 10 ? `0${mins}` : mins
  let secs = parseInt(seconds % 60, 10)
  secs = secs < 10 ? `0${secs}` : secs
  return `${mins}:${secs}`
}

export function stringToColor(string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substr(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

export function stringAvatar(name) {
  const newName = name.toUpperCase()
  return {
    sx: {
      bgcolor: stringToColor(newName)
    },
    children: `${newName.split(' ')[0][0]}${newName.split(' ')[1][0]}`
  }
}
