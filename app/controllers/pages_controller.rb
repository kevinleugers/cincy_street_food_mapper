class PagesController < ApplicationController
  include PagesHelper

  def home
    @members = get_members
    @tweets = get_tweets(@members)
  end

  def help
  end
end
