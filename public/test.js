class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: props.test,
      dummy: props.dummy,
      host: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/get?res=`,
      url: '',
    }
    this.updateData = this.updateData.bind(this)
  }

  updateData(){
    this.getData(this.state.url, data => this.setState({test: JSON.stringify(data)}))
    this.getData(`${this.state.host}${this.state.url}`, (data) => this.setState({dummy: JSON.stringify(data)}))
  }

  getData(url, callback) {
    fetch(url)
      .then(res => res.json())
      .then(data => callback(data))
      .catch(error => callback(`Error occored while getting data : ${error}`))
  }

  render() {
    return (
        <div>
        <h2>Testing corcs call back</h2>
          <div>
            <label>Submit strict CORS URL endpoint to Test Proxy Api : </label>
            <input
              size={55}
              placeholder={"url"}
              type="text"
              name="url"
              value={this.state.url}
              onChange={(e)=>this.setState({url: e.target.value})}/>
            <button
              type="submit"
              onClick={(e) => { e.preventDefault; this.updateData(this.state.url)}}
            >
              Test URL
            </button>
          </div>
          <br/>
        <div className="test__normal-data">Using normal url : {this.state.url}<br/><code>{this.state.test}</code></div>
        <br/>
        <div className="test__proxy-data">Using middle ware: {(this.state.url) ? `${this.state.host}${this.state.url}` : ''}<br/><code>{this.state.dummy}</code></div>
      </div>
    )
  }
}

const root = document.querySelector('#root')
ReactDOM.render(<Test
  test={`This will be updated with normal api fetch data.`}
  dummy={`This will be updated with proxy api fetch data.`}
/>, root)

//Todo: Better tools for frontend dev, homepage creation, form for submiting custom api end point
