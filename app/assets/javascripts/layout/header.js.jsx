exampleApp.Header = scrivito.createComponent(() =>
  <nav>
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
        </button>
        <scrivito.React.Link to={ scrivito.Obj.getByPath('/') } className="navbar-brand navbar-scrivito-logo">
          <img src="assets/scrivito-logo-dark.svg" alt="Scrivito Example"/>
          <i>javascript edition</i>
        </scrivito.React.Link>
        {/*
        <%= link_to(scrivito_path(home_page), class: "navbar-brand navbar-scrivito-logo") do %>
          <%= image_tag("scrivito-logo-dark.svg", alt: "Scrivito Example") %>
        <% end %>
        */}
      </div>

      <div className="collapse navbar-collapse" id="navbar-collapse">
        <ul className="nav navbar-nav">
          <li>
            <a href="#" data-toggle="modal" data-target="#instructions">Instructions</a>
          </li>
        </ul>

        <exampleApp.Navigation />

        {/*
        <%= form_tag(scrivito_path(search_page), method: :get, class: "navbar-form navbar-right") do %>
          <div class="form-group">
            <input name="q" type="text" class="form-control" placeholder="Search">
            <%= button_tag("Go", class: "btn btn-default") %>
          </div>
        <% end %>
        */}

        <ul className="nav navbar-nav navbar-right">
          <li><a href="/">Switch to Rails</a></li>
          <li>
          {/*
            <% if current_user %>
              <%= link_to("View as website visitor", session_path, method: :delete) %>
            <% else %>
              <% if Rails.application.editor_password.present? %>
                <a href="#" data-toggle="modal" data-target="#login-panel">View as Scrivito editor</a>

                <div id="login-panel" class="modal fade" tabindex="-1" role="dialog">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Enter Editor Password</h4>
                      </div>
                      <div class="modal-body">
                        <%= form_tag(session_path, method: :post, class: "") do %>
                          <div class="form-group">
                            <label for="editor-pw">Editor password</label>
                            <input id="editor-pw" name="password" type="password" class="form-control" placeholder="password">
                          </div>
                          <%= button_tag("Switch to editor mode", class: "btn btn-primary") %>
                        <% end %>
                      </div>
                    </div>
                  </div>
                </div>
              <% else %>
                <%= link_to("View as Scrivito editor", session_path, method: :post) %>
              <% end %>
            <% end %>
          */}
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
