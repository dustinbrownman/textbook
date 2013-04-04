class LessonsController < InheritedResources::Base
  before_filter :find_deleted_lesson, :only => [:show, :edit, :update]

  load_and_authorize_resource

  helper_method :sections
  helper_method :chapters

  def index
    super do |format|
      format.html do
        if params[:search]
          @query = params[:search]
          @results = Lesson.advanced_search(@query)
          render :search_results
        elsif params[:deleted]
          @lessons = Lesson.only_deleted
          render :deleted
        else
          flash.keep
          redirect_to table_of_contents_path
        end
      end
    end
  end

  private

  def sections
    Section.all
  end

  def chapters
    Chapter.all
  end

  def find_deleted_lesson
    @lesson = Lesson.with_deleted.find(params[:id]) if params[:deleted]
  end
end
