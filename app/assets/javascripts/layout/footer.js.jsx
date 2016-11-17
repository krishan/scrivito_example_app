exampleApp.Footer = () =>
  <section className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <a data-toggle="collapse" href=".footer-explanation-text" className="footer-explanation-link">How are these footer columns generated?</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h4>
          {/*
            <%= link_to("", scrivito_path(home_page), class: "footer-logo") %>
          */}
          </h4>
        </div>

        <div className="col-md-3">
          <h4>Latest Posts</h4>
        </div>

        <div className="col-md-3">
          <h4>Useful Links</h4>
        </div>

        <div className="col-md-3">
          <h4>Contact Us</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <p className="collapse footer-explanation-text">
            1. Fixed text, rendered by the Rails template in this left column.
          </p>
        </div>
        <div className="col-md-3">
          <p className="collapse footer-explanation-text">
            2. A list in the "Latest Posts" column, dynamically rendered using a Scrivito search.
          </p>
        </div>
        <div className="col-md-3">
          <p className="collapse footer-explanation-text">
            3. A link list in the "Useful Links" column, maintainable by editors. You can edit the
              links on the page properties dialog of the
              {/*
              <%= link_to("homepage", scrivito_path(home_page), class: "footer-explanation-link") %>.
              */}
          </p>
        </div>
        <div className="col-md-3">
          <p className="collapse footer-explanation-text">
            4. A free-form text in the "Contact Us" column, alterable by editors.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
        </div>

        <div className="col-md-3">
          <ul className="list-unstyled">
            {/*
            <% recent_posts.each do |post| %>
              <li>
                <%= link_to(post.title, scrivito_path(post)) %>
                <br>
                <small><%= post.published_at.strftime("%B %d, %Y") %></small>
              </li>
            <% end %>
            */}
          </ul>
        </div>

        <div className="col-md-3">
          <ul className="list-unstyled">
          {/*
            <% home_page.footer_links.each do |link| %>
              <li>
                <%= link_to(link.display_title, scrivito_path(link)) %>
              </li>
            <% end %>
          */}
          </ul>
        </div>

        <div className="col-md-3">
        {/* <%= scrivito_tag(:div, home_page, :contact_us_text) %> */}
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p>
            2016 &copy; All Rights Reserved.
            <a href="https://scrivito.com">scrivito.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
