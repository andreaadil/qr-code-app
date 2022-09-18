class UI {
    constructor() {
        this.preview = document.getElementById('preview');
        this.buttons = document.getElementById('buttons');
        this.qrCol = document.getElementById('qrCol');
        this.firstCol = document.getElementById('firstCol');
        this.firstTime = true;
        this.baseQR = "";
    }

    showPreview(qrCode) {
        
        if(this.firstTime === true) {
            this.baseQr = new Image();
            this.baseQr.src = qrCode.qrCode.url;
            this.baseQr.id = "qr";

            this.preview.appendChild(this.baseQr);
            
            this.qrCol.classList.remove("c-hide");
            this.qrCol.classList.add("c-show");
            this.firstCol.classList.remove("col-md-6");
            this.firstCol.classList.add("col-md-8");
            this.firstTime = false;
        } else {
            this.baseQr.src = qrCode.qrCode.url;
            this.preview.appendChild(this.baseQr);
        }
        }

}