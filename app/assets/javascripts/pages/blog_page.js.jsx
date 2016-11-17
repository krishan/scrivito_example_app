const BlogPage = scrivito.createObjClass({
  name: "BlogPage",
  attributes: {
    title: "string",
    body: "widgetlist",
  }
});

scrivito.provideComponent(BlogPage, (page) =>
  <div>
    INSERT BLOG CODE HERE :-)
  </div>
);


