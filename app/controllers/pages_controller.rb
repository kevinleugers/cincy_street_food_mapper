class PagesController < ApplicationController
  def home
    @tweets = Twitter.user_timeline("kleugs513")
  end

  def help
  end
end
