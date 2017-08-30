export const callAPIAction = (title, date, desc, image, id, score) => {

  return {
    type: 'GET_MOVIES',
    title,
    date,
    desc,
    image,
    id,
    score
  }
}
