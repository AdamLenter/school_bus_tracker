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
  get '/daily_route_stop_times_by_parameters/:daily_route_id', to: 'daily_route_stop_times#where'
  get '/daily_route/:bus_route_id/:date/:to_or_from_school', to: 'daily_routes#where'
  get '/parent_students/:adult_contact_id', to: 'students#where'

  post '/users', to: 'special#create'
  post '/students', to: 'student#create'
  post '/driver_buses', to: 'driver_buses#create'
  post '/daily_route', to: 'daily_routes#create'
  post '/daily_route_stop_times', to: 'daily_route_stop_times#create'

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"
  delete "/students/:student_id", to: "students#destroy"

end
