const ImageWidget = scrivito.createWidgetClass({
  name: "ImageWidget",
  attributes: {
    image: "reference"
  }
});

scrivito.provideComponent(ImageWidget, (widget) =>
  <scrivito.React.Image src={ widget } attribute="image" className="img-responsive" />
);


