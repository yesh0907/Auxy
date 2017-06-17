Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  resources :records, only: [:create, :update]

  post 'diagnosis/diagnose', 'diagnosis#diagnose'
  post 'diagnosis/triage', 'diagnosis#triage'
  post 'diagnosis/parse', 'diagnosis#parse'
  get 'diagnosis/symptoms', to: 'diagnosis#all_symptoms'

  get 'scrape/ktph', to: 'scrape#ktph'
  get 'scrape/ttsh', to: 'scrape#ttsh'
  get 'scrape/shortest', to: 'scrape#shortest'

  get 'mobile/receive', to: 'twilio#receive_sms'
end
