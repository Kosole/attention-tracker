arr = ["здоровье", "работа", "английский язык"]

for (let i = 0; i<arr.length; i++) {
    table.innerHTML += "<tr><td><button>убрать</button></td><td contenteditable>"+arr[i]+"</td><td contenteditable></td><td contenteditable></td><td></td></tr>"

}

addBtn.onclick = function () {
    table.innerHTML += "<tr><td><button>убрать</button></td><td contenteditable></td><td contenteditable></td><td contenteditable></td><td></td></tr>"
}

table.onclick = function (event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.parentElement.remove()
    }

}