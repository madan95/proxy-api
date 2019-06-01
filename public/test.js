class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = { test: props.test, dummy: props.dummy}
  }

  componentDidMount() {
    setTimeout(() => this.testCORS(), 3000)
    let local_test = `http://localhost:9000/api`
    let url = `https://password.madanlimbu.com/dummy`
    let proxy_api = `http://localhost:9000/get?res=${url}`

    this.getData(url, data => this.setState({test: JSON.stringify(data)}))
    this.getData(proxy_api, data => this.setState({dummy: JSON.stringify(data)}))
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
        <div className="test__normal-data">Using normal url : <code>{this.state.test}</code></div>
        <br/>
        <div className="test__proxy-data">Using middle ware: <code>{this.state.dummy}</code></div>
      </div>
    )
  }
}

const root = document.querySelector('#root')
ReactDOM.render(<Test test={`This will be updated with api data.`}/>, root)

//Todo: Better tools for frontend dev, homepage creation, form for submiting custom api end point
