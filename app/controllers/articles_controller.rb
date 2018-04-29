# frozen_string_literal:true

# Article controller
class ArticlesController < ApplicationController
  # Create new article
  def new
    @article = Article.new
  end

  # Add new article
  def create
    # render plain: params[:article].inspect
    @article = Article.new(article_params)
    @article.save
    redirect_to articles_show(@article)
  end

  private
  def article_params
    params.require(:article).permit(:title, :desciption)
  end
end
