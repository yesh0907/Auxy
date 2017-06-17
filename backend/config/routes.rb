Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  get 'scrape/ktph', 'scrape#ktph'
  get 'scrape/ttsh', 'scrape#ttsh'
  get 'scrape/shortest', 'scrape#shortest'
end
