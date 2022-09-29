var aNumberList = []
var aPairList = []
var aGeaterThanTenList = []
var aNumberOfSequance = []

// document.getElementById('aArrayList').innerHTML = aNumberList

function getNumberListLength(aNumberList) {
    if (aNumberList.length > 6) {
        var btnGreaterThanTen = document.getElementById('btnGreaterThanTen');
        var btnPair = document.getElementById('btnPair');
        var btnSequance = document.getElementById('btnSequance');

        btnGreaterThanTen.disabled = false
        btnPair.disabled = false
        btnSequance.disabled = false
        btnGreaterThanTen.classList.remove('btn-disabled')
        btnPair.classList.remove('btn-disabled')
        btnSequance.classList.remove('btn-disabled')
        btnGreaterThanTen.classList.remove('btn')
        btnPair.classList.remove('btn')
        btnSequance.classList.remove('btn')

    }
    else {
        var btnGreaterThanTen = document.getElementById('btnGreaterThanTen');
        var btnPair = document.getElementById('btnPair');
        var btnSequance = document.getElementById('btnSequance');

        btnGreaterThanTen.disabled = true
        btnPair.disabled = true
        btnSequance.disabled = true
        btnGreaterThanTen.classList.add('btn-disabled')
        btnPair.classList.add('btn-disabled')
        btnSequance.classList.add('btn-disabled')
        btnGreaterThanTen.classList.add('btn')
        btnSequance.classList.add('btn')
        btnPair.classList.add('btn')
    }
}

function getreaterThanTen() {
    aNumberList.forEach(item => {
        if (item > 10) {
            aGeaterThanTenList.push(item)
        }
    });

    // console.log(aGeaterThanTenList.length)
    document.getElementById('aGreaterThanTen').innerHTML = aGeaterThanTenList.length
}

function getPair() {

    // aNumberList.sort();
    // console.log(aNumberList.sort())
    let nPair = 0;
    let i = 0;

    while (i < aNumberList.length) {

        let number = aNumberList[i];
        let nCount = 1;
        i++;

        while (i < aNumberList.length && aNumberList[i] == number) {
            nCount++;
            aPairList.push(aNumberList[i])
            i++;
        }

        if (nCount >= 2) {
            nPair = nPair + Math.floor(nCount / 2);
        }
    }
    document.getElementById('nNumberOfPair').innerHTML = nPair;

    // nPairSum = 0
    // aPairList.forEach(item => {
    //     nPairSum += item;
    // })

    // nPairSum = nPairSum * 2
    // console.log(nPairSum)
}

function getSequance() {
    let nPair = 0;
    let i = 0;

    // console.log("start")

    while (i < aNumberList.length) {
        let number = aNumberList[i];

        let isSequence = false


        if (aNumberList[i + 1] === number + 1) {
            if (aNumberList[i + 2] === number + 2) {
                if (aNumberList[i + 3] === number + 3) {
                    if (aNumberList[i + 4] === number + 4) {
                        // console.log(`${aNumberList[i]},${aNumberList[i + 1]},${aNumberList[i + 2]},${aNumberList[i + 3]},${aNumberList[i + 4]}`)
                        aNumberOfSequance.push(aNumberList[i], aNumberList[i + 1], aNumberList[i + 2], aNumberList[i + 3], aNumberList[i + 4])
                        // console.log(aNumberOfSequance.sort())
                        nPair++
                        isSequence = true
                    }
                }
            }
        }
        if (isSequence) {
            i = i + 5
            isSequence = false
        }
        else {
            i++
        }
    }
    document.getElementById('nNumberOfSequance').innerHTML = nPair
}

function getAdd() {

    var nTextNumber = document.getElementById('textbox').value

    if (isNaN(parseInt(nTextNumber))) {
        alert("Kindly Enter A number")
        return false
    }

    aNumberList.push(parseInt(nTextNumber))

    if (parseInt(nTextNumber) === null) {
        alert('Please Enter a value')
        return false
    }

    let nTotalSum = 0
    aNumberList.forEach(item => {
        nTotalSum += item;
    });

    let nPairTotal = 0
    aPairList.forEach(item => {
        nPairTotal += item
    })

    let nNumberOfSequance = 0
    aNumberOfSequance.forEach(item => {
        nNumberOfSequance += item
    })

    //console.log(nPairTotal)
    //console.log(nNumberOfSequance)

    document.getElementById('aArrayList').innerHTML = aNumberList
    document.getElementById('totalOfNumber').innerHTML = nTotalSum - (nPairTotal * 2) - nNumberOfSequance;

    document.getElementById('inputForm').reset()
    document.getElementById('textbox').focus()

    getNumberListLength(aNumberList)

}


function getDelete() {
    let nTextNumber = document.getElementById('textbox');

    if (isNaN(parseInt(nTextNumber))) {
        alert("Kindly Enter A number")
        return false
    }

    let nTotal = document.getElementById('totalOfNumber').textContent
    let i = aNumberList.indexOf(parseInt(nTextNumber.value));

    if (i > -1) {
        aNumberList.splice(i, 1);
    }

    getNumberListLength(aNumberList)
    document.getElementById('aArrayList').innerText = aNumberList;
    document.getElementById('inputForm').reset()
    nTextNumber.focus()
    document.getElementById('totalOfNumber').innerHTML = parseInt(nTotal) - nTextNumber.value

}