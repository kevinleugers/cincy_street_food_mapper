class PagesController < ApplicationController

  def home
   # @members = get_members
    if Rails.cache.read("cached_tweets")
      @tweets = Rails.cache.read("cached_tweets")
      @cache = true
    else
      @parser = TweetParser.new
      @list = @parser.get_list
      @tweets = @parser.get_tweets(@list)
      @cache = false
      @cache_results = Rails.cache.read("cached_tweets")
    end
  end

  def help
  end
end
