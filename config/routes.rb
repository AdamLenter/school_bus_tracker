Rails.application.routes.draw do
  
  resources :daily_route_stop_times
  resources :parent_and_students
  resources :students
  resources :parents
  resources :drivers_and_bus_routes
  resources :drivers
  resources :daily_route_messages
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get 'buses', to: 'buses#index'

  post 'users', to: 'special#create'

  post "/login", to: "sessions#create"
end
