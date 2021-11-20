
function cubeflop({data, id, height, duration, backgroundColor}) {

    let d = data + "";
    for (let i = 0; i < d.length; i++) {
        let dom = `<div class="cube"></div>`;
        let bnode = $("#" + id + " .suffix");
        bnode.before(dom);
        let node = $("#" + id + " .cube:last");
        if (!isNaN(parseInt(d[i]))) {
            node.css("backgroundColor", backgroundColor + "");
            let numDom = ""
            for (let j = 0; j < 10; j++) {
                numDom = `<div class="number">
          <span class="value">${j}</span>
        </div>`;
                node.append(numDom);
            }
        } else {
            node.addClass("isMark");
            node.css("backgroundColor", "transparent");
            let numDom = `<div class="number">
        <span class="value" >${d[i]}<span>
      </div>`;
            node.append(numDom)
        }
    }
    
    setInterval(() => {
        for (let s = 0; s < d.length; s++) {
            if (!isNaN(parseInt(d[s]))) {
                let numbers = $(`#${id} .cube:eq(${s}) .number`)
                for (let k = 0; k < 10; k++) {
                    const item = numbers[k];
                    $(item).css({ "transform": "translateY(-" + parseInt(d[s]) * height + "px)", transition: `all ${duration}ms ease-in 0s` })
                }
            }
        }
    }, 100)


}