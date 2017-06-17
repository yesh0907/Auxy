require 'infermedica'
require 'rest-client'
require 'rubygems'

class Diagnose
  def self.call(info)
    api = Infermedica::Api.new(api_id: ENV['infermedica_app_id'], api_key: ENV['infermedica_app_key'])
    return api.diagnosis(info)
  end

  def self.triage(info)
    api = Infermedica::Api.new(api_id: ENV['infermedica_app_id'], api_key: ENV['infermedica_app_key'])
    return api.triage(info)
  end

  def self.parse(param)
    response = RestClient.post "https://api.infermedica.com/v2/parse", {"text" => param[:text] }.to_json, {"App-Id": "01da3a19", "App-Key": "594c8c94747719c52b3d112b53b42348", "Content-Type": "application/json"}
    return response.body
  end

end
