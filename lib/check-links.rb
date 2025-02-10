require 'html-proofer'

opts = {
  checks: ['Links', 'Scripts', 'Images'],
  ignore_empty_alt: true,
  ignore_missing_alt: true,
  enforce_https: true
}

HTMLProofer.check_directory(ARGV[0], opts).run
