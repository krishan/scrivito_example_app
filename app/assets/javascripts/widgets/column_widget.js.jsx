const ColumnWidget = scrivito.createWidgetClass({
  name: "ColumnWidget",
  attributes: {
    column1: "widgetlist",
    column2: "widgetlist",
    column3: "widgetlist",
    column4: "widgetlist",
    column5: "widgetlist",
    column6: "widgetlist",
  }
});

scrivito.provideComponent(ColumnWidget, (widget) =>
  <div className="row">
    {
      _.range(1, 7).map((i) => {
        const attrName = `column${i}`;

        if (widget.get(attrName).length > 0) {
          return <div key={ i } className="col-md-4">
            <scrivito.React.Content content={ widget } attribute={ attrName } />
          </div>;
        }
      })
    }
  </div>
);


