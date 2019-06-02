import React, {useReducer} from "react"
import "./index.scss"

const initialState = {
  url: 'Intial Url',
  data: 'Initial Data'
}

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      console.log('add called')
      console.log(state)
      console.log(action)
      let url = "http://localhost:9000/add"
      let result = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state)
      }).then(res => res.json());
      console.log(result)
      //return {url: 'New URL State', data: 'New data Added.'}
    case 'update':
      return {...state, ...action.payload}
    default:
      throw new Error();
  }
}

export default function Add(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <label>URL</label>
      <input
        type="text"
        name="url"
        value={state.url}
        onChange={(e) => dispatch({type: 'update',
          payload: {
          url: e.target.value
          }
        })}
      /><br/>
      <label>Data</label>
      <textarea
        type="text"
        name="data"
        value={state.data}
        onChange={(e) => dispatch({type: 'update',
          payload: {
            data: e.target.value
          }
          }
          )}
      />
      <div>
        {state.url}
        {state.data}
      </div>
      <button
        type="submit"
        onClick={()=>dispatch({type: 'add'})}
      >Submit</button>
    </>
  )
}
