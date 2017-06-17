Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  resources :records, only: [:create, :update]
  
  get 'scrape/ktph', 'scrape#ktph'
  get 'scrape/ttsh', 'scrape#ttsh'
  get 'scrape/shortest', 'scrape#shortest'
end
