require 'rubygems'
require 'twilio-ruby'

class Sms
  def self.send(from, body)
    account_sid = ENV['twilio_auth_sid']
    auth_token = ENV['twilio_auth_token']

    @client = Twilio::REST::Client.new(ENV['twilio_auth_sid'], ENV['twilio_auth_token'])

    @client.account.messages.create({
      :from => '+18329327581',
      :to => from,
      :body => body
    })

    return "Sent Message"
  end

  def self.receive(params)
    message_body = params[:body]
    from = params[:from]

    symptom = Diagnose.parse({"text": message_body})

    return self.class.send(from, body)
  end
end
