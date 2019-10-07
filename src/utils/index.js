export const themeName = (selectedTheme) => {
  if (selectedTheme === "default") {
    return "Dark"
  } else if (selectedTheme === "alt") {
    return "Default"
  }
}

export const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60) || 0
  const seconds = (duration - minutes * 60) || 0
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

export const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]
  }
	return array
}