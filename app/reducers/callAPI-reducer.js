const callAPI = (state = [], action ) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return [...state, { id: action.id, title: action.title, desc: action.desc, image: action.image, date: action.date, score: action.score} ]
    default:
      return state
  }
}

export default callAPI
