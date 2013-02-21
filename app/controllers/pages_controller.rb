class PagesController < ApplicationController
  include PagesHelper

  def home
    @members = get_members
    @tweets = get_tweets(@members)
    @jtweets = @tweets.to_json
  end

  def help
  end
end
