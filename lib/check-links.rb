require 'html-proofer'

dir = ARGV[0]

opts = {
  allow_missing_href: true,
  root_dir: "#{Dir.pwd}/#{dir}",
  disable_external: true,
  allow_hash_href: true,
  ignore_empty_alt: true,
  ignore_missing_alt: true
}

HTMLProofer.check_directory(dir, opts).run
