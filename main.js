let data = {
    b1: null,
    b2: null,
    b4: null,
    drum_b1: null,
    drum_b2: null,
    drum_b4: null
}

function onClick(event) {
    console.log(data)
    console.log(`clicked ${event.target.id}`)
    id_ = event.target.id
    bpm = document.getElementById('bpm').value;
    switch (id_) {
        case 'b1':            
            toggleButton(id_, (60/bpm) * 1000)
            break;
        case 'b2':            
            toggleButton(id_, (60/bpm) * 2000)
            break;
        case 'b4':            
            toggleButton(id_, (60/bpm) * 4000)
            break;    
        default:
            break;
    }
}

function toggleButton(id, x) {
    console.log(`toggling ${id}`)
    const state = data[id];
    console.log(`toggling ${id}`)
    if (state) {  // active
        console.log(`clearing ${id}`)
        clearInterval(data[id])
        data[id] = NaN
    } else {
        data[id] = setInterval(changeBG, x, id)
    }
}

drumStates = {iid_1 : "", iid_2 : "", iid_4 : ""}
function playDrum(name){

    // sound interval:
    
    iid = drumStates["iid_"+name]    
    // iid = lst[Number(name)]

    bpm = document.getElementById('bpm').value;
    interval = (60/bpm) * 1000 * Number(name)

    if (iid != ""){
        clearInterval(iid)
        drumStates["iid_"+name] = ""
    }else{        
        new Audio('../drum.mp3').play()  // start immediatly
        iid = setInterval(playSound, interval)
        drumStates["iid_"+name] = iid
    }



    // run/stop colors:
    id = "drum_b" + name    
    toggleButton(id, interval)

 }

 function playSound(){
    console.log("dbg")
    new Audio('drum.mp3').play()
    }


function changeBG(id) {

    col_id1 = id + "_1"
    col_id2 = id + "_2"

    color1 = document.getElementById(col_id1).value
    color2 = document.getElementById(col_id2).value    
    // console.log(color1)

    elem = document.getElementById(id);
    console.log(`changing ${id}`)
    if (elem.name == color1) {
        elem.style.backgroundColor = color2;
        elem.name = color2;
    } else {
        elem.style.backgroundColor = color1
        elem.name = color1;
    }
}