source 'https://rubygems.org'

gem 'autoprefixer-rails'
gem 'bootstrap-sass'
gem 'dotenv-rails'
gem 'jbuilder', '~> 2.0'
gem 'jquery-rails'
gem 'rails', '4.2.7.1'
gem 'rails_12factor', group: :production
gem 'sass-rails', '~> 5.0'
# to use the latest SDK version
# check out https://github.com/infopark/rails_connector
# and put the location into the ENV
if repo_path = ENV['SCRIVITO_SDK_REPO_PATH']
  path repo_path do
    gem 'scrivito'
    gem 'scrivito_sdk'
    gem "scrivito_editors"
    gem "scrivito_content_browser"
    gem "scrivito_development"
  end
else
  puts "you need the very latest SDK (at least 1.7) to use this, see Gemfile!"
  raise "doesn't work without latest SDK"
  # gem 'scrivito', '1.5.1'
end
gem 'scrivito_advanced_editors'
gem 'secure_headers'
gem 'uglifier', '>= 1.3.0'
