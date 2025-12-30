// api.js - Dynamic JSON API
const now = new Date();

// Format waktu WIB
const wibFormatter = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});

const data = {
  status: 'success',
  timestamp: now.getTime(),
  iso: now.toISOString(),
  wib: wibFormatter.format(now),
  api_version: '1.0.1',
  note: 'CortiezSensiX by Cyrust',
  server_time: Date.now(),
  endpoints: {
    json: '/api.json',
    js: '/api.js',
    time: '/time.json'
  }
};

// Untuk Node.js/CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = data;
}

// Untuk ES Modules
if (typeof exports !== 'undefined') {
  exports.default = data;
}

// Untuk browser langsung
if (typeof window !== 'undefined') {
  window.CortiezSensiX = data;
  
  // Auto-display jika diakses langsung
  if (window.location.pathname.includes('api.js')) {
    document.write(JSON.stringify(data, null, 2));
    document.close();
  }
}

// Console log untuk debugging
console.log('CortiezSensiX API Loaded:', data);
