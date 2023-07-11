require 'html-proofer'

opts = {
  allow_missing_href: true,
  disable_external: true,
  allow_hash_href: true,
  ignore_empty_alt: true,
  ignore_missing_alt: true,
  only_4xx: true
}

HTMLProofer.check_directory(ARGV[0], opts).run
