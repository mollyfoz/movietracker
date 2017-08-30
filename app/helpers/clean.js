import React from 'react'

const cleanData = (data) => {
  return data.map((obj, i) => {
    Object.assign({}, { title: data.title, date: data.release_date, desc: data.overview, image: data.poster_path, id: data.id, score: data.vote_average })
  })
}

export default cleanData
