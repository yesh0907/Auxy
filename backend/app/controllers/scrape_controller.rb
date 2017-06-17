class ScrapeController < ApplicationController
  def ktph
    json_response(Ktph.new.crawl)
  end

  def ttsh
    json_response(Ttsh.new.crawl)
  end

  def shortest
    ktph = Ktph.new.crawl
    ttsh = Ttsh.new.crawl

    json_response("TTSH") if ktph[:amount_of_patients] > ttsh[:amount_of_patients]
    json_response("KTPH") if ktph[:amount_of_patients] < ttsh[:amount_of_patients]
  end
end
