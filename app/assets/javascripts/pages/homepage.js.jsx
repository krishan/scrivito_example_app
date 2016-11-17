const Homepage = scrivito.createObjClass({
  name: "Homepage",
  attributes: {
    title: "string",
    body: "widgetlist",
  }
});

scrivito.provideComponent(Homepage, (page) =>
  <div>
    <section className="section-padding-small bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <scrivito.React.Content tag="h1" content={ page } attribute="title" />
          </div>
          <div className="col-md-2 homepage-notebox">
            <img src="assets/screencast-homepage.gif" className="img-responsive" />
          </div>
        </div>
      </div>
    </section>

    <scrivito.React.Content content={ page } attribute="body" />
  </div>
);


