import { INPUT_VALUE, KEEP_DATA, FETCH_DATA } from '../constants'

export const inputChange = (title, name, val) => dispatch =>
  dispatch({
    type: INPUT_VALUE,
    title,
    name,
    val,
  })

export const keepData = params => ({
  type: KEEP_DATA,
  payload: {
    data: params,
  },
})

export const fetchData = () => ({
  type: FETCH_DATA,
})
