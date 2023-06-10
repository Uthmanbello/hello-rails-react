class GreetingsController < ApplicationController
  def random_greeting
    if Message.exists?
      greeting = Message.order('RANDOM()').first
      render json: { greeting: }
    else
      render json: {}
    end
  end
end
