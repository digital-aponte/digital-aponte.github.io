# repotting-template 🌱🍯
Quick and messy template & guide for repotting live, static-ish sites with Httrack and some Ruby tools on Mac.  
Inspired by [Repotting Old Digital Humanities Projects:
Two Test Cases](https://thisismattmiller.com/post/repotting-old-digital-humanities-projects/) by Matt Miller. 

<a href="https://thisismattmiller.com/post/repotting-old-digital-humanities-projects/">
  <img alt="illustration borrowed from matt miller's post of three servers including one buried halfway into a plant pot." src="https://i.imgur.com/Uzsl95i.png" width="300"/>
</a>

## Prerequisites
- [Homebrew](https://brew.sh/)
- [Wget](https://www.gnu.org/software/wget/) (install with `$ brew install wget`)
- [Html-Tidy](http://www.html-tidy.org/) (install with `$ brew install tidy-html5`)
- [Ruby via RVM](https://rvm.io/rvm/install)

## Instructions
### 1. __Setup__
  - [Create a new repo from this template](https://github.com/nyu-dss/repotting-template/generate). The new repo name should be "\<projectname\>-repotted"
  - Clone the repo to your local machine, cd into it, then run `$ bundle install`
### 2. __Copy__
  - Copy the site using wget. the command is
  `$ wget -r -E -k -p -np -nc --random-wait <url>`, where `<url>` is the full, publicly accessible URL to the website you want to copy.
### 3. __Clean up__
  - Wget should have created a folder with the same name as your url. Rename it `docs`.
### 4. __Check links__
  - Run `$ bundle exec ruby lib/check-links.rb docs`. This will flag any broken links _within_ the site (not externally). Totally up to you what to do with this information / whether or not to fix it!
### 5. __Check html__
  - Run `$ bundle exec ruby lib/check-html.rb docs`. This will flag any HTML errors within the copied site. If there are no major errors, feel free to skip to Step 7.
### 6. __Tidy html__
  - Run `$ bundle exec ruby lib/tidy-html.rb sdocs`. This will attempt to automatically "tidy" some HTML errors. You can check the HTML again using `$ bundle exec ruby lib/check-html.rb docs` to see if tidying worked. Again, totally up to you what to do with this information / whether or not to fix it!
### 7. __Finish__
  - When you're done copying and tidying, rename this `README.md` file to `instructions.md`
  - Next, fill out the `README-template.md` and rename it to `README.md`
  - Add, commit, and push your changes (including the site in `docs`)
  - Test the site using github pages by going to `settings` > `github pages` and setting the source to `main` > `docs`.
  - After a minute, go to the live github pages site to test it.
  - If everything is good, copy the contents of `docs` into your "new pot" host, e.g., an NYU web hosting account.
  - Et voilà!
