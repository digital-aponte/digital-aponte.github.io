require 'html-proofer'

opts = {
  checks: ['Links', 'Scripts', 'Images'],
  ignore_urls: [/www.miamiartguide.com/],
  ignore_empty_alt: true,
  allow_missing_href: true,
  check_internal_hash: false,
  check_external_hash: false,
  ignore_missing_alt: true,
  enforce_https: true
}

HTMLProofer.check_directory(ARGV[0], opts).run
