const HeadlineWidget = scrivito.createWidgetClass({
  name: "HeadlineWidget",
  attributes: {
    headline: "string",
  }
});

scrivito.provideComponent(HeadlineWidget, (widget) =>
  <scrivito.React.Content tag="h3" content={ widget } attribute="headline" />
);


