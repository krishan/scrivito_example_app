const TextWidget = scrivito.createWidgetClass({
  name: "TextWidget",
  attributes: {
    text: "html",
  }
});

scrivito.provideComponent(TextWidget, (widget) =>
  <scrivito.React.Content content={ widget } attribute="text" />
);


