var obj = [
    {
        serive: "Daimond Certificate",
        description: "goldRing",
        color: "white",
        qty: 1,
        weigth: "2.56 ct",
        amount: 5000,
    },
    {
        serive: "Daimond Certificate",
        color: "black",
        description: "goldRing",
        qty: 1,
        weigth: "2.56 ct",
        amount: 5000,
    },
    {
        serive: "Daimond Certificate",
        color: "red",
        qty: 1,
        weigth: "2.56 ct",
        amount: 5000,
    },
    {
        serive: "Daimond Certificate",
        color: "pink",
        qty: 1,
        weigth: "2.56 ct",
        amount: 5000,
    },
    {
        serive: "Daimond Certificate",
        color: "pink",
        qty: 1,
        weigth: "2.56 ct",
        amount: 5000,
    },
    {
        serive: "Daimond Certificate",
        color: "pink",
        qty: 1,
        weigth: "2.56 ct",
        amount: 5000,
    },
]
var name = "fardeen";
var Recipt = "4542165402156452";
var mobileNo = "0302179639";
var DeliveryDate = "14-05-2019";
var printTime = "3:43";
var PacketNo = 25

// JsBarcode("#code128", Recipt, {
//     format: "CODE128",
//     lineColor: "#0aa",
//     width:4,
//     height:40,
//     displayValue: false
//   });

//   JsBarcode("#code128", "20190513082555100");
var id = document.getElementById("mainDiv");
id.innerHTML = `
    <div id= "text">
    <h2>Customer Copy</h2>
    </div>
    <div id = "headDiv">
        <table id = "table1">
            <tr>
                <td>Customer Name: </td>
                <td class= "text">${name}</td>
            </tr>
            <tr>
                <td>Recipt no: </td>
                <td class= "text">${Recipt}</td>
            </tr>
            <tr>
                <td>mobile No: </td>
                <td class= "text">${mobileNo}</td>
            </tr>
            <tr class ="color">
                <td>Delivery Date: </td>
                <td class= "text">${DeliveryDate}</td>
            </tr>
        </table>
        <table id = "table2">
            <tr>
                <td>Print Date: </td>
                <td class= "text">${DeliveryDate}</td>
            </tr>
            <tr>
                <td>print Time: </td>
                <td class= "text">${printTime}</td>
            </tr>
            <tr class ="color">
                <td>Packet No: </td>
                <td class= "text">${PacketNo}</td>
            </tr>
            <tr>
            <td colspan="2">
            <svg id="code128"></svg>
            </td>
            </tr>
        </table>
    </div>
    <div id = "div2">
    <table id = "mainTable" >
        <tr class = "color">
            <th class = "tr">s no</th>
            <th class = "tr">service</th>
            <th class = "tr">Color</th>
            <th class = "tr">Qty</th>
            <th class = "tr">Weight</th>
            <th class = "tr">Seal</th>
            <th class = "tr">Mine</th>
            <th class = "tr">Amount</th>
        </tr>
    </table>
    </div>
    <div id = "div3">
        <div id = "divP">
            <p>I Have read & understood thye description of my articles(s).
            and i agreed that the company Shall not be responsible for
            the articles(s) left over 30 Days. And the company Sahll also
            not be responsible for any lose or damage of articles(s)
            during examination process, resulting from robbery and theft, negligrnce and natural act of God </p>
        </div>
        <div id = "tableDiv">
            <table id = "bottomTable">
                 <tr>
                    <td>Total Amount: </td>
                    <td class ="color text">20000</td>
                </tr>
                <tr>
                    <td>Advance: </td>
                    <td class= "text">10000</td>
                </tr>
                <tr>
                    <td>Discount: </td>
                    <td class= "text">2000</td>
                </tr>
                <tr id = "border">
                    <td>Blance: </td>
                    <td class ="color text">8000</td>
                </tr>
            </table>
        </div>
        </div>
    <div id = "sign">
    <h3>costumer sign</h3>
    </div>
    `




var getId = document.getElementById("mainTable")
for (var i = 0; i < obj.length; i++) {
    getId.innerHTML += ` 
    <tr>
        <td id = "td">${i + 1}</td>
        <td id = "td1">${obj[i].serive}<br>${
        obj[i].description !== undefined ? obj[i].description : "&nbsp"
        }</td>
        <td id = "td">${obj[i].color}</td>
        <td id = "td">${obj[i].qty}</td>
        <td id = "td">${obj[i].weigth}</td>
        <td id = "td">${i + 1}</td>
        <td id = "td">${i + 1}</td>
        <td id = "td2">${obj[i].amount}/-</td>
    </tr>
    `
}

var id = document.getElementById("mainDiv2");
id.innerHTML = `
    <div id= "text">
    <h2>Office Copy</h2>
    </div>

    <div id = "headDiv">
        <table id = "table1">
            <tr>
                <td>Customer Name: </td>
                <td class= "text">${name}</td>
            </tr>
            <tr>
                <td>Recipt no: </td>
                <td class= "text">${Recipt}</td>
            </tr>
            <tr>
                <td>mobile No: </td>
                <td class= "text">${mobileNo}</td>
            </tr>
            <tr class ="color">
                <td>Delivery Date: </td>
                <td class= "text">${DeliveryDate}</td>
            </tr>
        </table>
        <table id = "table2">
            <tr>
                <td>Print Date: </td>
                <td class= "text">${DeliveryDate}</td>
            </tr>
            <tr>
                <td>print Time: </td>
                <td class= "text">${printTime}</td>
            </tr>
            <tr class ="color">
                <td>Packet No: </td>
                <td class= "text">${PacketNo}</td>
            </tr>
            <tr>
            <td colspan="2">
            <svg id="code128"></svg>
            </td>
            </tr>

        </table>
    </div>
    <div id = "div2">
    <table id = "mainTable1" >
        <tr class = "color">
        <th class = "tr">s no</th>
        <th class = "tr">service</th>
        <th class = "tr">Color</th>
        <th class = "tr">Qty</th>
        <th class = "tr">Weight</th>
        <th class = "tr">Seal</th>
        <th class = "tr">Mine</th>
        <th class = "tr">Amount</th>
    </tr>
    </table>
    </div>
    <div id = "div3">
        <div id = "divP">
            <p><h4>Comment:</h4> Take care of the Stone, Check
            Mine, weigth of the Ring is 5.53 grams and
            daimond weigth is 1.25ct</p>
        </div>
        <div id = "tableDiv">
            <table id = "bottomTable">
                 <tr>
                    <td>Total Amount: </td>
                    <td class ="color text">20000</td>
                </tr>
                <tr>
                    <td>Advance: </td>
                    <td class= "text">10000</td>
                </tr>
                <tr>
                    <td>Discount: </td>
                    <td class= "text">2000</td>
                </tr>
                <tr id = "border">
                    <td>Blance: </td>
                    <td class ="color text">8000</td>
                </tr>
            </table>
        </div>
    </div>
    <div id = "sign">
    <h3>costumer sign</h3>
    </div>
    `




var getId1 = document.getElementById("mainTable1")
for (var i = 0; i < obj.length; i++) {
    getId1.innerHTML += ` 
    <tr>
        <td id = "td">${i + 1}</td>
        <td id = "td1">${obj[i].serive}<br>${
        obj[i].description !== undefined ? obj[i].description : "&nbsp"
        }</td>
        <td id = "td">${obj[i].color}</td>
        <td id = "td">${obj[i].qty}</td>
        <td id = "td">${obj[i].weigth}</td>
        <td id = "td">${i + 1}</td>
        <td id = "td">${i + 1}</td>
        <td id = "td2">${obj[i].amount}/-</td>
    </tr>
    `
}

function printElem() {
    var content = document.getElementById("main").innerHTML;
    var mywindow = window.open('', 'Print');

    mywindow.document.write('<html><head><title>Print</title>');
    mywindow.document.write('<link href="index.css" rel="stylesheet">')
    mywindow.document.write('</head><body >');
    // mywindow.document.write('<script src = "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/barcodes/JsBarcode.code128.min.js"></script>');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    // mywindow.focus()
    // mywindow.print();
    // mywindow.close();
    return true;
}

JsBarcode("#code128", Recipt);
