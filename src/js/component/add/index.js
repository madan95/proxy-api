import React, {useReducer} from "react"
import "./index.scss"

const initialState = {
  url: '',
  data: ''
}

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      console.log('add called')
      console.log(state)
      console.log(action)
      let url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/add`
      let result = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state)
      }).then(res => res.json());
      console.log(result)
      //Todo: update color of link created on sucess or failure
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
        placeholder="/posts"
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
        placeholder='[{"todo":[{"id":1,"getalife":"madan"},{"id":2,"hail":"jesus"}]}]'
        rows={10}
        cols={55}
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
      <div className="add__endpoint">
        Your proxy end point is <a href={`${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/${state.url}`} >{`${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/${state.url}`}</a>
      </div>
      <button
        type="submit"
        onClick={()=>dispatch({type: 'add'})}
      >Submit</button>
    </>
  )
}
