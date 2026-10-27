import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './Scanner.css';

function Scanner() {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(true);
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('qr-reader', {
      qrbox: { width: 280, height: 280 },
      fps: 5,
    });

    scanner.render(onScanSuccess, onScanError);

    function onScanSuccess(decodedText, decodedResult) {
      setScanResult(decodedText);
      setIsScanning(false);
      scanner.clear();
    }

    function onScanError(error) {
      // Silent
    }

    scannerRef.current = scanner;

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, []);

  const resetScanner = () => {
    setScanResult(null);
    setIsScanning(true);
    window.location.reload();
  };

  return (
    <div className="scanner-page">
      {/* Animated Background Elements */}
      <div className="scan-bg-decoration scan-decoration-1"></div>
      <div className="scan-bg-decoration scan-decoration-2"></div>
      <div className="scan-bg-decoration scan-decoration-3"></div>

      {/* Header */}
      <div className="scan-header">
        <div className="scan-brand">NO NONSENSE</div>
        <div className="scan-tagline">SCANNER</div>
      </div>

      {/* Scanner Content */}
      <div className="scan-content">
        {isScanning ? (
          <div className="scan-camera-section">
            <div className="scan-title">SCAN YOUR CODE</div>
            <div className="scan-subtitle">QR Code • Barcode • Product Code</div>
            <div id="qr-reader" className="qr-reader-container"></div>
          </div>
        ) : (
          <div className="scan-result-section">
            <div className="scan-success-icon">✓</div>
            <div className="scan-success-title">SCAN COMPLETE</div>
            <div className="scan-result-box">
              <div className="scan-result-label">SCANNED CODE</div>
              <div className="scan-result-text">{scanResult}</div>
            </div>
            <button onClick={resetScanner} className="scan-btn">
              SCAN AGAIN
            </button>
          </div>
        )}
      </div>

      {/* Company Details Section */}
      <div className="scan-details-container">
        {/* Manufacturer */}
        <div className="scan-detail-card">
          <div className="scan-detail-header">
            <div className="scan-icon">🏭</div>
            <div className="scan-detail-title">MANUFACTURED BY</div>
          </div>
          <div className="scan-company-name">PATEL BEVERAGES</div>
          <div className="scan-company-subtitle">PRIVATE LIMITED</div>
          <div className="scan-detail-divider"></div>
          <div className="scan-address">
            <div className="scan-address-icon">📍</div>
            <div className="scan-address-text">
              <div>No.: 505/2,3-4,</div>
              <div>GIDC Estate Makarpura,</div>
              <div>Vadodara, Gujarat-390010</div>
            </div>
          </div>
          <div className="scan-license">
            <div className="scan-license-label">LIC NO.</div>
            <div className="scan-license-number">10013021000941</div>
          </div>
        </div>

        {/* Marketer */}
        <div className="scan-detail-card scan-marketer-card">
          <div className="scan-detail-header">
            <div className="scan-icon">📢</div>
            <div className="scan-detail-title">MARKETED BY</div>
          </div>
          <div className="scan-company-name">
            FLAVOR<span className="scan-red">ON</span>
          </div>
          <div className="scan-company-subtitle">FOOD AND BEVERAGES</div>
          <div className="scan-detail-divider"></div>
          <div className="scan-address">
            <div className="scan-address-icon">📍</div>
            <div className="scan-address-text">
              <div>A6 602, Purab Apartments,</div>
              <div>Sector 88, Sahibzada Ajit Singh</div>
              <div>Nagar, Punjab – 140308</div>
            </div>
          </div>
          <div className="scan-location-pin">
            <div className="scan-pin-icon">🏢</div>
            <div className="scan-pin-text">Punjab</div>
          </div>
          <div className="scan-pincode">
            <div className="scan-pincode-icon">📮</div>
            <div className="scan-pincode-text">PIN CODE: 140308</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="scan-footer">
        <div className="scan-footer-text">© 2026 NO NONSENSE</div>
        <div className="scan-footer-tagline">Big Energy • Zero Nonsense</div>
      </div>
    </div>
  );
}

export default Scanner;
