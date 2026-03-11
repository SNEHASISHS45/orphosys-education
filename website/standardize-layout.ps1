$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$websiteDir = $scriptDir
$pagesDir = Join-Path $websiteDir 'pages'

# Master header/footer (taken from website/index.html styling), with actual links.
# Two variants: root files (index.html) and pages/*.html

$headerRoot = @'
<header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-20">
<a class="flex items-center" href="index.html">
<img class="h-16 w-auto transition-all duration-300 hover:scale-105" src="assets/nav_logo.png" alt="Orphosys" />
</a>
<nav class="hidden lg:flex items-center gap-8">
<a class="text-sm font-semibold text-primary" href="index.html">Home</a>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="pages/about_us_with_team_photos.html">About
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-56 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/about_us_with_team_photos.html">About</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/affiliation_orphosys_education.html">Affiliation</a>
</div>
</div>
</div>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="pages/affiliation_orphosys_education.html">Franchise
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-72 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/affiliation_process_orphosys_education.html">Affiliation Process</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/apply_online_orphosys_education.html">Apply Online</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/main_login_page_orphosys_education.html">Study Centre Login</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/authorized_center_list_orphosys_education.html">Authorized Center List</a>
</div>
</div>
</div>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="pages/courses_orphosys_education.html">Courses
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-64 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/courses_orphosys_education.html">Offline Courses</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/online_ready_courses_orphosys_education.html">Online Ready Courses</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/online_live_courses_orphosys_education.html">Online Live Courses</a>
</div>
</div>
</div>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="pages/photo_gallery_orphosys_education.html">Gallery
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-48 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/photo_gallery_orphosys_education.html">Photo</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/video_gallery_orphosys_education.html">Video</a>
</div>
</div>
</div>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="pages/main_login_page_orphosys_education.html">Student
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-80 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/student_login_orphosys_education_1.html">Student Registration</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/registration_process_orphosys_education.html">Registration Process</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/main_login_page_orphosys_education.html">Student Login</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/online_exam_portal_orphosys_education.html">Online Exam</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/online_mock_test_login_orphosys_education.html">Online Mock Test</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/student_id_card_login_orphosys_education.html">Student Id Card</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/student_admit_card_login_orphosys_education.html">Student Admit Card</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/certificate_download_login_orphosys_education.html">Certificate Download</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/marksheet_download_login_orphosys_education.html">Marksheet Download</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/e_book_download_login_orphosys_education.html">E-Book Download</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="pages/job_notification_login_orphosys_education.html">Job Notification</a>
</div>
</div>
</div>

<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="pages/contact_us_orphosys_education.html">Contact Us</a>
</nav>
<div class="flex items-center gap-4">
<a class="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all" href="pages/sample_file_download_orphosys_education.html">
<span class="material-symbols-outlined text-[20px]">download</span>
Download
</a>
<a class="px-6 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all" href="pages/main_login_page_orphosys_education.html">
Login
</a>
</div>
</div>
</div>
</header>
'@

$headerPages = @'
<header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-20">
<a class="flex items-center" href="../index.html">
<img class="h-16 w-auto transition-all duration-300 hover:scale-105" src="../assets/nav_logo.png" alt="Orphosys" />
</a>
<nav class="hidden lg:flex items-center gap-8">
<a class="text-sm font-semibold text-primary" href="../index.html">Home</a>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="../pages/about_us_with_team_photos.html">About
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-56 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/about_us_with_team_photos.html">About</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/affiliation_orphosys_education.html">Affiliation</a>
</div>
</div>
</div>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="../pages/affiliation_orphosys_education.html">Franchise
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-72 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/affiliation_process_orphosys_education.html">Affiliation Process</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/apply_online_orphosys_education.html">Apply Online</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/main_login_page_orphosys_education.html">Study Centre Login</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/authorized_center_list_orphosys_education.html">Authorized Center List</a>
</div>
</div>
</div>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="../pages/courses_orphosys_education.html">Courses
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-64 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/courses_orphosys_education.html">Offline Courses</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/online_ready_courses_orphosys_education.html">Online Ready Courses</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/online_live_courses_orphosys_education.html">Online Live Courses</a>
</div>
</div>
</div>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="../pages/photo_gallery_orphosys_education.html">Gallery
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-48 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/photo_gallery_orphosys_education.html">Photo</a>
<a class="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/video_gallery_orphosys_education.html">Video</a>
</div>
</div>
</div>

<div class="relative group">
<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1" href="../pages/main_login_page_orphosys_education.html">Student
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</a>
<div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-[60]">
<div class="min-w-80 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden p-2">
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/student_login_orphosys_education_1.html">Student Registration</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/registration_process_orphosys_education.html">Registration Process</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/main_login_page_orphosys_education.html">Student Login</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/online_exam_portal_orphosys_education.html">Online Exam</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/online_mock_test_login_orphosys_education.html">Online Mock Test</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/student_id_card_login_orphosys_education.html">Student Id Card</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/student_admit_card_login_orphosys_education.html">Student Admit Card</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/certificate_download_login_orphosys_education.html">Certificate Download</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/marksheet_download_login_orphosys_education.html">Marksheet Download</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/e_book_download_login_orphosys_education.html">E-Book Download</a>
<a class="block px-4 py-1.5 text-sm font-semibold text-slate-800 hover:bg-primary/5 hover:text-primary rounded-xl transition-colors" href="../pages/job_notification_login_orphosys_education.html">Job Notification</a>
</div>
</div>
</div>

<a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="../pages/contact_us_orphosys_education.html">Contact Us</a>
</nav>
<div class="flex items-center gap-4">
<a class="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all" href="../pages/sample_file_download_orphosys_education.html">
<span class="material-symbols-outlined text-[20px]">download</span>
Download
</a>
<a class="px-6 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all" href="../pages/main_login_page_orphosys_education.html">
Login
</a>
</div>
</div>
</div>
</header>
'@

$footerRoot = @'
<footer class="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid lg:grid-cols-4 gap-12 mb-16">
<div class="col-span-1 lg:col-span-1">
<div class="flex items-center gap-2 mb-6">
<div class="size-8 bg-primary rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-white text-[20px]">psychology</span>
</div>
<span class="text-xl font-black text-primary">ORPHOSYS</span>
</div>
<div class="space-y-6">
<div>
<h6 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">location_on</span>
Howrah Office
</h6>
<p class="text-sm text-slate-600 leading-relaxed">
45, Dumurjala Stadium Complex,<br/>
Howrah, West Bengal - 711101
</p>
</div>
<div>
<h6 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">location_on</span>
Kolkata Office
</h6>
<p class="text-sm text-slate-600 leading-relaxed">
12B, Salt Lake Sector V,<br/>
Kolkata, West Bengal - 700091
</p>
</div>
</div>
</div>
<div>
<h6 class="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h6>
<ul class="space-y-4">
<li><a class="text-sm text-slate-600 hover:text-primary transition-colors" href="pages/courses_orphosys_education.html">Courses</a></li>
<li><a class="text-sm text-slate-600 hover:text-primary transition-colors" href="pages/affiliation_orphosys_education.html">Franchise</a></li>
<li><a class="text-sm text-slate-600 hover:text-primary transition-colors" href="pages/contact_us_orphosys_education.html">Contact Us</a></li>
</ul>
</div>
<div class="col-span-1 lg:col-span-2">
<h6 class="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Send Your Query</h6>
<form class="grid grid-cols-1 md:grid-cols-2 gap-4">
<input class="bg-white border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-sm p-3 w-full" placeholder="Full Name" type="text"/>
<input class="bg-white border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-sm p-3 w-full" placeholder="Email Address" type="email"/>
<div class="col-span-1 md:col-span-2">
<select class="bg-white border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-sm p-3 w-full">
<option>Select Enquiry Type</option>
<option>Franchise Enquiry</option>
<option>Offline Course Enquiry</option>
<option>Online Course Enquiry</option>
<option>Partnership Proposal</option>
</select>
</div>
<div class="col-span-1 md:col-span-2">
<textarea class="bg-white border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-sm p-3 w-full" placeholder="Your Message" rows="3"></textarea>
</div>
<div class="col-span-1 md:col-span-2">
<button class="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Submit Enquiry</button>
</div>
</form>
</div>
</div>
<div class="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
<p class="text-sm text-slate-500">© 2024 Orphosys Foundation. All rights reserved.</p>
<div class="flex items-center gap-6">
<a class="text-slate-400 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">social_leaderboard</span></a>
<a class="text-slate-400 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">linked_camera</span></a>
<a class="text-slate-400 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">mail</span></a>
</div>
</div>
</div>
</footer>
'@

$footerPages = $footerRoot.Replace('href="pages/', 'href="../pages/')

function Replace-HeaderFooter {
  param(
    [Parameter(Mandatory=$true)][string]$filePath,
    [Parameter(Mandatory=$true)][string]$headerHtml,
    [Parameter(Mandatory=$true)][string]$footerHtml
  )

  $content = Get-Content -LiteralPath $filePath -Raw

  # Replace the first header block
  $content = [regex]::Replace(
    $content,
    '(?is)<header\b.*?</header>',
    $headerHtml,
    1
  )

  # Replace the first footer block
  $content = [regex]::Replace(
    $content,
    '(?is)<footer\b.*?</footer>',
    $footerHtml,
    1
  )

  Set-Content -LiteralPath $filePath -Value $content -Encoding UTF8 -NoNewline
}

# Apply to homepage
$indexFile = Join-Path $websiteDir 'index.html'
Replace-HeaderFooter -filePath $indexFile -headerHtml $headerRoot -footerHtml $footerRoot

# Apply to all pages
$pageFiles = Get-ChildItem -Path $pagesDir -Filter '*.html' -File
foreach ($p in $pageFiles) {
  Replace-HeaderFooter -filePath $p.FullName -headerHtml $headerPages -footerHtml $footerPages
}

'Standardized header/footer in: ' + (1 + $pageFiles.Count) + ' files.'
