//= require ./scrivito_config
//= require_tree ./resources
//= require_tree ./pages
//= require_tree ./widgets
//= require_tree ./layout

// navigate to homepage manually, as the SDK doesn't yet do that automatically
scrivito.loadAsync(() => scrivito.Obj.getByPath("/")).
  then((homepage) => scrivito.navigateTo(homepage));

const App = scrivito.createComponent(() =>
  <div className="wrapper">
    <exampleApp.Header />
    <scrivito.React.CurrentPage/>
    <exampleApp.Footer />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('application')
);

