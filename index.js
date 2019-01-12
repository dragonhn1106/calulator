(function () {
    var mayTinh = document.getElementById('mayTinh');
    khong = () => {
        mayTinh.display.value += '0'
    }
    mot = () => {
        mayTinh.display.value += '1'
    }
    hai = () => {
        mayTinh.display.value += '2'
    }
    ba = () => {
        mayTinh.display.value += '3'
    }
    bon = () => {
        mayTinh.display.value += '4'
    }
    nam = () => {
        mayTinh.display.value += '5'
    }
    sau = () => {
        mayTinh.display.value += '6'
    }
    bay = () => {
        mayTinh.display.value += '7'
    }
    tam = () => {
        mayTinh.display.value += '8'
    }
    chin = () => {
        mayTinh.display.value += '9'
    }
    cong = () => {
        mayTinh.display.value += '+'
    }
    congTru = () => {
        if (mayTinh.display.value > 0) {
            console.log('chuyen sang so am');
            (mayTinh.display.value = `-${mayTinh.display.value}`);
            console.log(mayTinh.display.value);

        } else if (mayTinh.display.value == '') {
            console.log('khong có gì');
            mayTinh.display.value;
        } else {
            console.log('chuyen sang so duong');
            mayTinh.display.value -= mayTinh.display.value * 2;
            console.log(mayTinh.display.value);
        }
    }
    tong = () => {
        console.log(mayTinh.display.value = eval(mayTinh.display.value));

    }
    tru = () => {
        mayTinh.display.value += '-';
    }
    xoaHet = () => {
        mayTinh.display.value = '';
    }
    nhan = () => {
        mayTinh.display.value += '*'
    }
    chia = () => {
        mayTinh.display.value += '/'
    }
    dot = () => {
        mayTinh.display.value += '.'
    }
    xoaTungPhanTu = () => {
        var x = mayTinh.display.value;
        var y = x.split('');

        console.log(y);

    }
}())