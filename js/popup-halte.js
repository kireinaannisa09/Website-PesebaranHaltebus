
// Gaya Korea untuk Kecamatan
function createKoreaStylePopup(judul, alamat = "", telepon = "") {
    return `
        <div class="popup-korea-header">
            <div class="popup-icon-row">
                <div class="popup-icon">🏙️</div>
                <div class="popup-badge">Sebaran Halte</div>
            </div>
            <div class="popup-title">${judul}</div>
            <div class="popup-subtitle">Pekanbaru, Riau</div>
        </div>
        <div class="popup-korea-body">
            <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-text">
                    <span class="info-label">ALAMAT</span>
                    <span class="info-value">${alamat || "Kecamatan Bina Widya, Pekanbaru"}</span>
                </div>
            </div>
            <div class="info-item">
                <div class="info-icon">📞</div>
                <div class="info-text">
                    <span class="info-label">KONTAK</span>
                    <span class="info-value">${telepon || "0761-1234567"}</span>
                </div>
            </div>
        </div>
        <div class="popup-actions">
            <button class="action-btn" onclick="alert('📍 Alamat: ${alamat || "Kecamatan Bina Widya, Pekanbaru"}')">🧭 Navigasi</button>
            <button class="action-btn action-btn-primary" onclick="this.closest('.leaflet-popup').querySelector('.leaflet-popup-close-button').click()">✕ Tutup</button>
        </div>
    `;
}

// js/popup-halte.js
function createHaltePopup(namaHalte, zona, koridor) {
    return `
        <div class="halte-popup-header">
            <div class="halte-illustration">
                <div class="bus-shelter">
                    <div class="shelter-roof"></div>
                    <div class="shelter-pillar">
                        <div class="pillar"></div>
                        <div class="pillar"></div>
                    </div>
                    <div class="bench"></div>
                </div>
                <div class="citybus-icon">
                    <div class="bus-body">
                        <div class="bus-window"></div>
                        <div class="wheel wheel-left"></div>
                        <div class="wheel wheel-right"></div>
                    </div>
                    <div class="bus-label">CITYBUS</div>
                </div>
            </div>
            <div class="road"></div>
        </div>
        <div class="halte-info">
            <div class="halte-name">🚏 HALTE ${namaHalte}</div>
            <div class="detail-item">
                <div class="detail-icon">📍</div>
                <div>
                    <div class="detail-label">ZONA</div>
                    <div class="detail-value">${zona}</div>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-icon">🚌</div>
                <div>
                    <div class="detail-label">KORIDOR</div>
                    <div class="detail-value">${koridor}</div>
                </div>
            </div>
            
            
    `;
}