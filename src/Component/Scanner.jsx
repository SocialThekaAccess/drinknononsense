import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './Scanner.css';

function Scanner() {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(true);
  const scannerRef = useRef(null);

  useEffect(() => {
    // Initialize scanner
    const scanner = new Html5QrcodeScanner('qr-reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(onScanSuccess, onScanError);

    function onScanSuccess(decodedText, decodedResult) {
      setScanResult(decodedText);
      setIsScanning(false);
      scanner.clear();
    }

    function onScanError(error) {
      // Silent error handling - scanner keeps running
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
    <div className="scanner-container">
      <div className="scanner-header">
        <h1>No Nonsense Scanner</h1>
        <p>Scan QR Code or Barcode</p>
      </div>

      <div className="scanner-content">
        {isScanning ? (
          <div id="qr-reader"></div>
        ) : (
          <div className="scan-result">
            <div className="success-icon">✓</div>
            <h2>Scan Successful!</h2>
            <div className="result-box">
              <p className="result-label">Scanned Code:</p>
              <p className="result-text">{scanResult}</p>
            </div>
            <button onClick={resetScanner} className="scan-again-btn">
              Scan Again
            </button>
          </div>
        )}
      </div>

      <div className="scanner-footer">
        <p>© 2026 No Nonsense - drinknononsense.com</p>
      </div>
    </div>
  );
}

export default Scanner;
