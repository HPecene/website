function addChild(div_id) {
    const node = document.getElementById('gist-div');
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    console.log(div_id)
    document.getElementById('gist-div').appendChild(document.getElementById(div_id))
}