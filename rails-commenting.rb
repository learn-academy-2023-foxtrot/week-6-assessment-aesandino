# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # ANSWER: The purpose and the functionality of this code is to  define a class called "BlogPostsController" that is inheriting "ApplictionController". While "def index" is the index being defined - used to display a list of items.

    # ---2)
    @posts = BlogPost.all
  end
  # ANSWER: The purpose and the functionality of this code is to design a controller action. "@posts" is defining a instance variable, "BlogPost" represents the blog posts in the application, ".all" is a method call on the "BlogPost" which retrieves all records of rows in the database. The "end" represents the end of the block. 

  # ---3)
  def show
    @post = BlogPost.find(params[:id])
  end
  # ANSWER: The purpose and the functionality of this code is to define a "show action" method in ruby. The "def show" will display one item, "@post" will be defining the instance variable, "BlogPost" represents blog applications, while the ".find(params[:id])" is fetching a specific record from the "blog_post" table.

  # ---4)
  def new
    @post = BlogPost.new
  end

  def create
    # ANSWER: The purpose and the functionality of this code is to create new blog posts in the controller. "def new" is the definition of a new action method, "@post = BlogPost.new" is creating a new instance of a blog post and is initializing an empty object. "def create" is the action accountable for processing data within the new action

    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ANSWER: The purpose and the functionality of this code is to create and edit a BlogPost. "@post = BlogPost.create(blog_post_params)" is creating a new instance of BlogPost from the ".create" method. "if @post.valid?" is a conditional statement that is checking if the Blog passes all of the criteria established in the model. Creates new blog posts and depending on the conditional determined, the page will reroute itself appropriately. 

    # ---6)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ANSWER: The purpose and the functionality of this code is to: perform actions, the parameters have been assigned the actions of @show and @post which is directing the site to create a new blog post and to redirect the user to a new page. 

    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ANSWER: The purpose and the functionality of this code is to update and destroy and BlogPost. The action of .update for the page will decide if the post is valid or not and then it will update. The destroy action will evaluate the success or failure of deleting the post and redirecting you to a new page based on whether the conditional was met or not. 

      # ---8)
      redirect_to blog_posts_path
    end
  end
#  ANSWER: The purpose and the functionality of this code is to redirect the user to a new page that serves as an index of blogs.

  # ---9)
  private
  def blog_post_params
    # ANSWER: The purpose and the functionality of this code is to establish strong parameters that serve as security for the blog posts. Acting as a wall of protection that prevents the database from being infiltrated. 

    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
# ANSWER: The purpose and the functionality of this code is to set a security measure that maintains the foundation that was built - preventing anyone from significantly altering the code. The only exception would be the title and content within the BlogPosts. 
