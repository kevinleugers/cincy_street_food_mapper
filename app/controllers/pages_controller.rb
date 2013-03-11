class PagesController < ApplicationController
  include PagesHelper

  def home
   # @members = get_members
   
    if Rails.cache.read("cached_tweets") 
    	@tweets = Rails.cache.read("cached_tweets") 
    	@cache = true
    else
    	@list = get_list
    	@tweets = get_tweets(@list)
    	@cache = false
    	@cache_results = Rails.cache.read("cached_tweets")
    end

  end

  def help
  end
end
