class PagesController < ApplicationController
  include PagesHelper

  def home
   # @members = get_members
    @list = get_list
    @tweets = get_tweets(@list)
    
  end

  def help
  end
end
