class TwilioController < ApplicationController
  def receive_sms
    json_response(Sms.receive)
  end
end
