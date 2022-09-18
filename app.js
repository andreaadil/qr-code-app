const qr = new QR;
const ui = new UI;

const form = document.querySelector('#urlForm');
const downloadBtn = document.querySelector('#downloadBtn');
let response = '';


form.addEventListener('submit', function(e) {
    const url = document.querySelector('#sourceUrl').value;
    qr.getQr(url)
        .then(qrCode => {
            response = qrCode;
            ui.showPreview(qrCode);
        })

    e.preventDefault();
});