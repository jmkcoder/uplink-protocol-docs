# Read the XML content
$xmlContent = Get-Content -Path ".\public\sitemap.xml" -Raw

# Replace the 404 URL entry
$pattern = '<url><loc>https://jmkcoder\.github\.io/src/app/404/page\.tsx</loc><changefreq>weekly</changefreq><priority>0\.7</priority></url>'
$newXmlContent = $xmlContent -replace $pattern, ''

# Write the modified content back to the file
Set-Content -Path ".\public\sitemap.xml" -Value $newXmlContent
