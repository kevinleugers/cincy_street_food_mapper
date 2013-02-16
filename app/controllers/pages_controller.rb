class PagesController < ApplicationController
  def home
    @tweets = Twitter.list_timeline("cincy-street-food-vendors")
  end

  def help
  end
end
