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

  get '/me/', to: 'users#show'
  get '/schools', to: 'schools#index'
  get '/buses', to: 'buses#index'
  get '/bus_routes', to: 'bus_routes#index'
  get '/bus_stops', to: 'bus_stops#index'

  post '/users', to: 'special#create'
  post '/students', to: 'student#create'
  post '/driver_buses', to: 'driver_buses#create'
  post '/daily_route', to: 'daily_routes#create'

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

end
