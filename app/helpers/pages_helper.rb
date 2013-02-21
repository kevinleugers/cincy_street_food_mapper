module PagesHelper

  def get_members
    @list = Twitter.list_members("cincy-street-food-vendors")
    @members = []
    @list.each do |l|
      @members << l.screen_name
    end
    return @members
  end

  def get_tweets(members)
    @tweets = []
    members.each do |member|
      timeline = Twitter.user_timeline(member)
      timeline.each do |tweet|
        if tweet.geo
          @tweets << tweet
          break
        end
      end
    end
    return @tweets
  end

end