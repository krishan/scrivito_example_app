Rails.application.routes.draw do

  resource(:session, only: [:create, :destroy])

  get '/js', to: 'js#index', as: "js"

  scrivito_route '/', using: 'homepage'
  scrivito_route '(/)(*slug-):id', using: 'slug_id'
  scrivito_route '/*permalink', using: 'permalink', format: false

end
