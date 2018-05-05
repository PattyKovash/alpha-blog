# frozen_string_literal:true

# Article controller
class ArticlesController < ApplicationController
  before_action :set_article, only: [:edit, :update, :show, :destroy]
  # Function to render all articles in index
  def index
    @articles = Article.all
  end

  # Create new article
  def new
    @article = Article.new
  end

  # Add new article
  def create
    @article = Article.new(article_params)
    if @article.save
      flash[:notice] = 'Article was successfully created!'
      redirect_to article_path(@article)
    else
      flash[:notice] = 'We could not save your article.'
      render :new
    end
  end

  # Edit article
  def edit; end

  # Update article
  def update
    if @article.update(article_params)
      flash[:notice] = 'Article was successfully updated!'
      redirect_to article_path(@article)
    else
      flash[:notice] = 'We could not update your article.'
      render :edit
    end
  end

  # Show articles
  def show; end

  # Delete articles
  def destroy
    @article.destroy
    flash[:notice] = 'Article was successfully deleted.'
    redirect_to articles_path
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :description)
  end
end
