// API Waktu sederhana - JavaScript Standalone
function getCurrentTime() {
  const now = new Date();
  
  // Formatter untuk WIB (Waktu Indonesia Barat)
  const wibFormatter = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  });
  
  const wibTime = wibFormatter.format(now);
  
  const data = {
    status: 'success',
    timestamp: now.getTime(),
    iso: now.toISOString(),
    wib: wibTime,
    api_version: '1.0.0',
    note: 'CortiezSensiX by Cyrust'
  };
  
  return data;
}

// Jika dijalankan di Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getCurrentTime };
  
  // Contoh penggunaan
  console.log(JSON.stringify(getCurrentTime(), null, 2));
}
