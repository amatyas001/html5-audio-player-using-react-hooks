export const themeName = (selectedTheme) => {
  if (selectedTheme === "default") {
    return "Dark"
  } else if (selectedTheme === "alt") {
    return "Default"
  }
}

export const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60) || 0;
  const seconds = (duration - minutes * 60) || 0;
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};