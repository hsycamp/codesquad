const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

// 숫자타입으로만 구성된 요소를 뽑아 배열만들기
var dataOfNumberTypes = [];

Object.keys(data).forEach(function (v) {
    for (key in data[v]) {
        if (typeof (data[v][key]) === "number") {
            dataOfNumberTypes.push(key);
        }
    }
})

console.log(dataOfNumberTypes)