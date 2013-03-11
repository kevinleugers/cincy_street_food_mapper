module PagesHelper

 # def get_members
  #  @list = Twitter.list_members("cincy-street-food-vendors")
  #  @list.each do |l|
   #   @members << l.screen_name
    #end
    #return @members
  #end
  def get_list
    @list = Twitter.list_timeline("cincy-street-food-vendors")
    return @list
  end
  
  def get_tweets(list)
    @tweets = []
    @list.each do |l|
      if l.geo
        @tweets << l
          break
      end
    end
    Rails.cache.write("cached_tweets", @tweets, :expires_in => 5.minutes)
    return @tweets
  end

  

end