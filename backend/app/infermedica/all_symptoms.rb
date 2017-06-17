require 'infermedica'

class AllSymptoms
  def self.call
    api = Infermedica::Api.new(api_id: ENV['infermedica_app_id'], api_key: ENV['infermedica_app_key'])
    return api.get_symptoms
  end
end
