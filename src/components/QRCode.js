import React, { useRef } from 'react'
import Button from '../theme/button';
import * as htmlToImage from "html-to-image";
import QRCode from 'react-qr-code'

function RenderQRCode({ qr }) {
    const qrRef = useRef(null);
    const downloadQRCode = () => {
        htmlToImage
            .toPng(qrRef.current)
            .then(function (dataUrl) {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "qr-code.png";
                link.click();
            })
            .catch(function (error) {
                console.error("Error generating QR code:", error);
            });
    };
    return (
        <div>
            {qr && <div className='mt-10 md:mt-0 my-2 flex  flex-col items-center justify-center space-y-3'>
                <QRCode
                    ref={qrRef}
                    value={qr}
                    level={"L"}
                    includeMargin={true}
                    
                />

                <Button type="button" onClick={downloadQRCode}>
                    Download QR Code
                </Button>
            </div>}
        </div>
    )
}

export default RenderQRCode