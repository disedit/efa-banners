export const useDate = (date) => {
  const newDate = new Date(date)
  const day = ("0" + newDate.getDate()).slice(-2)
  const month = ("0" + (newDate.getMonth() + 1)).slice(-2)
  const year = newDate.getFullYear()
  const formattedDate = `${day}.${month}.${year}`
  return formattedDate
}