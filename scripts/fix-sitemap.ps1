$content = Get-Content -Path ".\public\sitemap.xml"
$content = $content -replace '<url><loc>https://jmkcoder.github.io/src/app/404/page.tsx</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>', ''
Set-Content -Path ".\public\sitemap.xml" -Value $content
