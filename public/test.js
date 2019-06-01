class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = { test: props.test}
  }

  componentDidMount() {
    setTimeout(() => this.testCORS(), 5000)
  }

  testCORS() {
    let url = "http://localhost:9000/api"
    let different_origin_url = "https://password.madanlimbu.com/dashboard"
    fetch(url)
      .then(res => res.json())
      .then(data => { this.setState({test : JSON.stringify(data) }) })
  }

  render() {
    return (
      <div>
        <h2>Testing corcs call back</h2>
        <pre>{this.state.test}</pre>
      </div>
    )
  }
}

const root = document.querySelector('#root')
ReactDOM.render(<Test test={`This will be updated with api data.`}/>, root);
