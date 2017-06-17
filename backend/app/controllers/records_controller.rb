class RecordsController < ApplicationController
  def create
    @record = Record.new
    @record.condition = params[:condition]
    @record.created_by = params[:created_by]
    @record.symptoms = params[:symptoms]
    @record.save
    json_response(@record, :created)
  end

  def update
    @record = Record.find(params[:id])
    @record.update!(record_params)
    json_response(@record, :accepted)
  end

  private
  def record_params
    params.permit(:created_by, :condition, :symptoms)
  end

end
