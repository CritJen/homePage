class Api::V1::NewsController < ApplicationController
  before_action :find_news, only: [:update]
  def index
    @newses = News.all
    render json: @newses
  end

  def update
    @news.update(news_params)
    if @news.save
      render json: @news, status: :accepted
    else
      render json: { errors: @news.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def news_params
    params.permit(:title, :content)
  end

  def find_news
    @news = news.find(params[:id])
  end

end
