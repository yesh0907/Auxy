Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  resources :records, only: [:create, :update]

  post 'diagnosis/diagnose', 'diagnosis#diagnose'
  post 'diagnosis/triage', 'diagnosis#triage'
  post 'diagnosis/parse', 'diagnosis#parse'

  get 'scrape/ktph', 'scrape#ktph'
  get 'scrape/ttsh', 'scrape#ttsh'
  get 'scrape/shortest', 'scrape#shortest'
end
