fetch("http://hp-api.herokuapp.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "name";
    mainContainer.appendChild(div);
  }
}
