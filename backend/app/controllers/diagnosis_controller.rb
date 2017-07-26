class DiagnosisController < ApplicationController
  def diagnose
    json_response(Diagnose.call(diagnosis_params))
  end

  def triage
    json_response(Diagnose.triage(diagnosis_params))
  end

  def parse
    json_response(Diagnose.parse(parse_params))
  end

  def all_symptoms
    # json_response(AllSymptoms.call)
    file = File.join(Rails.root, 'app', 'infermedica', 'data.json')
    json_response(File.read(file))
  end

  private
  def diagnosis_params
    params.permit(:sex, :age, :evidence => [:id, :choice_id])
  end

  def parse_params
    params.permit(:text)
  end

end
