class Ttsh
  def crawl
    page = HTTParty.get('https://www.ttsh.com.sg/emergency/')

    parse_page = Nokogiri::HTML(page)

    wait_time = (parse_page.css('td>div>div')[2].text).gsub!(/\D/, "")

    amount_of_patients = (parse_page.css('td>div>div')[1].text).gsub!(/\D/, "")

    return {"wait_time": wait_time, "amount_of_patients": amount_of_patients}
  end
end
