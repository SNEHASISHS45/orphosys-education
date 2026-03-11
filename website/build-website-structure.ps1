$ErrorActionPreference = 'Stop'

$root = Get-Location
$websiteDir = Join-Path $root 'website'
$pagesDir = Join-Path $websiteDir 'pages'

New-Item -ItemType Directory -Force -Path $pagesDir | Out-Null

# 1) Homepage -> website/index.html
$homeSrc = Join-Path $root 'orphosys_education_full_light_mode_homepage\code.html'
$homeDst = Join-Path $websiteDir 'index.html'
Copy-Item -LiteralPath $homeSrc -Destination $homeDst -Force

# 2) Copy every */code.html into website/pages/<folder>.html
$sourcePageFiles = Get-ChildItem -Path $root -Recurse -Filter 'code.html' -File |
  Where-Object { $_.FullName -notmatch '\\website\\' }

foreach ($src in $sourcePageFiles) {
  $folderName = Split-Path -Leaf (Split-Path -Parent $src.FullName)

  # Skip homepage folder because it is already index.html
  if ($folderName -ieq 'orphosys_education_full_light_mode_homepage') {
    continue
  }

  $dst = Join-Path $pagesDir ($folderName + '.html')
  Copy-Item -LiteralPath $src.FullName -Destination $dst -Force
}

# 3) Rewire navbar links INSIDE website pages + homepage to match new structure
$labelToUrl = @{
  'Home'       = '../index.html'
  'About'      = '../pages/about_us_with_team_photos.html'
  'About Us'   = '../pages/about_us_with_team_photos.html'
  'Franchise'  = '../pages/affiliation_orphosys_education.html'
  'Courses'    = '../pages/courses_orphosys_education.html'
  'Gallery'    = '../pages/photo_gallery_orphosys_education.html'
  'Photo'      = '../pages/photo_gallery_orphosys_education.html'
  'Video'      = '../pages/video_gallery_orphosys_education.html'
  'Student'    = '../pages/main_login_page_orphosys_education.html'
  'Contact'    = '../pages/contact_us_orphosys_education.html'
  'Contact Us' = '../pages/contact_us_orphosys_education.html'
  'Download'   = '../pages/sample_file_download_orphosys_education.html'
}

function Update-LinksInFile {
  param(
    [Parameter(Mandatory=$true)][string]$filePath,
    [Parameter(Mandatory=$true)][hashtable]$map
  )

  $content = Get-Content -LiteralPath $filePath -Raw

  foreach ($key in $map.Keys) {
    $url = $map[$key]

    # Replace any existing href for an anchor whose visible text matches the key.
    $pattern = '<a([^>]*?)href="[^"]*"([^>]*?)>\s*' + [regex]::Escape($key) + '\s*</a>'
    $replacement = '<a$1href="' + $url + '"$2>' + $key + '</a>'
    $content = [regex]::Replace(
      $content,
      $pattern,
      $replacement,
      [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    )
  }

  Set-Content -LiteralPath $filePath -Value $content -Encoding UTF8 -NoNewline
}

# Update copied pages (they live in website/pages so they need ../index.html etc.)
$websitePages = Get-ChildItem -Path $pagesDir -Filter '*.html' -File
foreach ($p in $websitePages) {
  Update-LinksInFile -filePath $p.FullName -map $labelToUrl
}

# Update homepage (index.html is in website/ root so links should be pages/... not ../pages/...
$homeMap = @{}
foreach ($k in $labelToUrl.Keys) {
  $homeMap[$k] = ($labelToUrl[$k] -replace '^\.\./', '')
}
Update-LinksInFile -filePath $homeDst -map $homeMap

'Website structure created:'
' - ' + $homeDst
' - ' + $pagesDir
'Pages copied: ' + $websitePages.Count
