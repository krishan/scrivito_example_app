exampleApp.Navigation = scrivito.createComponent(() =>
  <ul className="nav navbar-nav">
    { scrivito.Obj.getByPath("/").children.map((item) =>
      <li key={ item.id }>
        <scrivito.React.Link to={ item }>{ item.get('title') || '[UNTITLED]' }</scrivito.React.Link>
      </li>
    )}
  </ul>
);

