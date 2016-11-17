const SectionWidget = scrivito.createWidgetClass({
  name: "SectionWidget",
  attributes: {
    content: "widgetlist"
  }
});

scrivito.provideComponent(SectionWidget, (widget) =>
  <section>{/*
    className="<%= padding_css %> bg-color-<%= widget.bg_color %>"
    <% if widget.bg_image.present? %>
      data-background-image-url="<%= scrivito_url(widget.bg_image) %>"
    <% end %>
*/}
    <scrivito.React.Content content={ widget } attribute="content" className="container"/>
  </section>
);


