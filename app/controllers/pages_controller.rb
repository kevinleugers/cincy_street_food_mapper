class PagesController < ApplicationController
  def home
    @list = Twitter.list_members("cincy-street-food-vendors")
    @members = []
    @list.each do |l|
    	@members << l.screen_name
    end
    @tweets = []
    @members.each do |member|
    	timeline = Twitter.user_timeline(member)
    	timeline.each do |tweet|
    		if tweet.geo
    			@tweets << tweet
    			break
    		end
    	end
    end
  end

  def help
  end
end
