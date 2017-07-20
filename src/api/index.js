import config from './config'

const {key} = config
const URL = `https://exercise-server.herokuapp.com/serieInfo/${key}`
export default function getEpisodes () {
  const url = URL
  return fetch(url)
  .then(res => res.json())
  .then(function (data) { return data.response.seasons })
}
