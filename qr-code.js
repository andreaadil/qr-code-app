class QR {
  
    async getQr(data) {
        const qrCode = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=200x200&format=png`);
        let blob = await qrCode.blob();
        let a = document.getElementById("downloadBtn");
        a.download = "qr-code.png";
        a.href = window.URL.createObjectURL(blob);

        return {
            qrCode
        }
    }

}
