class Ktph

  def crawl
    page = HTTParty.get("http://queue.ktph.com.sg/ktphq/AnE_WaitingTime.asp")

    parse_page = Nokogiri::HTML(page)

    wait_time = ScraperHelpers.sanitize(parse_page.css('b>font')[0].text)
    amount_of_patients = ScraperHelpers.sanitize(parse_page.css('b>font')[1].text)

    return { "wait_time": wait_time, "amount_of_patients": amount_of_patients }
  end

end
