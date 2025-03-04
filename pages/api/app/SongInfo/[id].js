// Next.js API route (if using Vercel)
// pages/api/app/SongInfo/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  res.setHeader("Content-Type", "text/html");
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <script>
            window.location.href = 'myspotifyapp://SongInfo/${id}';
            setTimeout(() => {
              const isAndroid = /Android/i.test(navigator.userAgent);
              window.location.href = isAndroid ? 
                'https://play.google.com/store/apps/details?id=com.spotify.music' : 
                'https://apps.apple.com/app/spotify-music/id324684580';
            }, 1000);
          </script>
        </head>
        <body>
          <p>Redirecting...</p>
        </body>
        </html>
      `);
}
