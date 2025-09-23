$port = 8000
$prefix = "http://127.0.0.1:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try {
    $listener.Start()
    Write-Output "Serving $((Get-Location).Path) on $prefix. Press Ctrl+C to stop."
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $requestPath = $context.Request.Url.AbsolutePath.TrimStart('/')
        if ($requestPath -eq '') { $requestPath = 'index.html' }
        $localPath = Join-Path -Path (Get-Location) -ChildPath $requestPath
        if (Test-Path $localPath) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $context.Response.ContentLength64 = $bytes.Length
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            switch ($ext) {
                '.html' { $mime = 'text/html' }
                '.css'  { $mime = 'text/css' }
                '.js'   { $mime = 'application/javascript' }
                '.png'  { $mime = 'image/png' }
                '.jpg'  { $mime = 'image/jpeg' }
                '.jpeg' { $mime = 'image/jpeg' }
                default { $mime = 'application/octet-stream' }
            }
            $context.Response.ContentType = $mime
            $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $context.Response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
            $context.Response.ContentType = 'text/plain'
            $context.Response.OutputStream.Write($buffer,0,$buffer.Length)
        }
        $context.Response.Close()
    }
} finally {
    if ($listener -and $listener.IsListening) { $listener.Stop(); $listener.Close() }
}
