const Page = scrivito.createObjClass({
  name: "Page",
  attributes: {
    title: "string",
    body: "widgetlist",
  }
});

scrivito.provideComponent(Page, (page) =>
  <div>
    <scrivito.React.Content content={ page } attribute="body" />
  </div>
);


