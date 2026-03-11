$ErrorActionPreference = 'Stop'

$map = @{
  'Home'       = '../orphosys_education_full_light_mode_homepage/code.html'
  'About'      = '../about_us_with_team_photos/code.html'
  'About Us'   = '../about_us_with_team_photos/code.html'
  'Franchise'  = '../affiliation_orphosys_education/code.html'
  'Courses'    = '../courses_orphosys_education/code.html'
  'Gallery'    = '../photo_gallery_orphosys_education/code.html'
  'Photo'      = '../photo_gallery_orphosys_education/code.html'
  'Video'      = '../video_gallery_orphosys_education/code.html'
  'Student'    = '../main_login_page_orphosys_education/code.html'
  'Contact'    = '../contact_us_orphosys_education/code.html'
  'Contact Us' = '../contact_us_orphosys_education/code.html'
  'Download'   = '../sample_file_download_orphosys_education/code.html'
}

$files = Get-ChildItem -Path (Get-Location) -Recurse -Filter 'code.html' -File

foreach ($file in $files) {
  $content = Get-Content -LiteralPath $file.FullName -Raw

  foreach ($key in $map.Keys) {
    $url = $map[$key]
    $pattern = '<a([^>]*?)href="\#"([^>]*?)>\s*' + [regex]::Escape($key) + '\s*</a>'
    $replacement = '<a$1href="' + $url + '"$2>' + $key + '</a>'
    $content = [regex]::Replace($content, $pattern, $replacement, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
  }

  Set-Content -LiteralPath $file.FullName -Value $content -Encoding UTF8 -NoNewline
}

'Updated navbar links in ' + $files.Count + ' files.'
