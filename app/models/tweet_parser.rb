class TweetParser
  attr_accessor :list, :tweets
  def initialize
    @list = []
    @tweets = []
  end

  def get_list
    @list = Twitter.list_timeline("cincy-street-food-vendors")
  end

  def get_tweets(list)
    @list.each do |tweet|
      if tweet.geo
        @tweets << tweet
          break
      end
    end
    Rails.cache.write("cached_tweets", @tweets, :expires_in => 5.minutes)
    @tweets
  end
end
