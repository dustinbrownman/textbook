class SectionsController < InheritedResources::Base
  load_and_authorize_resource :except => [:index]

  helper_method :chapters

  def index
    super do |format|
      format.html do
        flash.keep
        redirect_to table_of_contents_path
      end
    end
  end

  private

  def chapters
    Chapter.all
  end
end
