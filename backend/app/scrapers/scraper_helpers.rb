class ScraperHelpers
  def self.sanitize(word)
    word.gsub!(/[^0-9A-Za-z]/, '')
  end
end
