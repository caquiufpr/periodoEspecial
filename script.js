const diasDaSemana = ["Segundas", "Terças", "Quartas", "Quintas", "Sextas", "Dias Variados"];
const diasDaSemanaA = ["S","T","Q","Q","S"];
let hue = -20;
let selectedCycle = 4;
let mis = "<i class=\"menuIcons material-icons\" md-24 md-light style=\"vertical-align: middle;padding: 5px;\">";
let mif = "</i> ";

let spaceToFill = document.getElementById("tableItem");
let spaceToFillM = document.getElementById("mobile");

for (let i = 0; i <= 4; i++) {
    const cell = document.createElement('td');
    cell.id = "td" + i;
    spaceToFill.appendChild(cell);
}

function inflateMobile() {
if (window.innerWidth / window.innerHeight < 1) {
    spaceToFillM.innerHTML = "";

    for (let i = 0; i <= 4; i++) {
        const mcell = document.createElement('div');
        mcell.id = "mc" + i;
        mcell.innerHTML += "<h4>" + diasDaSemana[i] + "</h4>"
        spaceToFillM.appendChild(mcell);
    }

    const mcell = document.createElement('div');
    mcell.id = "mc5";
    mcell.innerHTML += "<h4>" + document.getElementById('hv').innerHTML + "</h4>"
    spaceToFillM.appendChild(mcell);
}
}

inflateMobile();

let id = 0;

function inflateScreen(c) {

    if (window.innerWidth / window.innerHeight > 1) {
        // Clear
        for (let i = 0; i <= 5; i++) {
            document.getElementById("td"+i).innerHTML = "";
        }

        switch (c) {
            case 1:
                cycle1.map(d => {
                    // Append to table
                    for (let i = 0; i < d.dias.length; i++) {
                        const block = buildBlock(d);
                        document.getElementById('td'+d.dias[i]).appendChild(block);
                    }
                })
                break;
            case 2:
                cycle2.map(d => {
                    // Append to table
                    for (let i = 0; i < d.dias.length; i++) {
                        const block = buildBlock(d);
                        document.getElementById('td'+d.dias[i]).appendChild(block);
                    }
                })
                break;
            case 3:
                cycle3.map(d => {
                    // Append to table
                    for (let i = 0; i < d.dias.length; i++) {
                        const block = buildBlock(d);
                        document.getElementById('td'+d.dias[i]).appendChild(block);
                    }
                })
                break;
            case 4:
                cycle4.map(d => {
                    // Append to table
                    for (let i = 0; i < d.dias.length; i++) {
                        const block = buildBlock(d);
                        document.getElementById('td'+d.dias[i]).appendChild(block);
                    }
                })
                break;
            default:
                break;
        }
    } else {
        document.getElementById('calendar').style.display = "none";
        document.getElementById('hv').style.display = "none";

        inflateMobile();

        switch (c) {
            case 1:
                cycle1.map(d => {
                    // Append to window
                    for (let i = 0; i < d.dias.length; i++) {
                        const block = buildBlock(d);
                        document.getElementById('mc'+d.dias[i]).appendChild(block);
                    }
                })
                break;
            case 2:
                cycle2.map(d => {
                    // Append to window
                    for (let i = 0; i < d.dias.length; i++) {
                        const block = buildBlock(d);
                        document.getElementById('mc'+d.dias[i]).appendChild(block);
                    }
                })
                break;
            case 3:
                cycle3.map(d => {
                    // Append to window
                    for (let i = 0; i < d.dias.length; i++) {
                        const block = buildBlock(d);
                        document.getElementById('mc'+d.dias[i]).appendChild(block);
                    }
                })
                break;
            case 4:
                cycle4.map(d => {
                    // Append to window
                    for (let i = 0; i < d.dias.length; i++) {
                        const block = buildBlock(d);
                        document.getElementById('mc'+d.dias[i]).appendChild(block);
                    }
                })
                break;
            default:
                break;
        }
        
    }
}

inflateScreen(selectedCycle);

popup("Ainda serão adicionadas mais disciplinas.")

function buildBlock(d) {
    // Create elements
    const el = document.createElement('div');
    const title = document.createElement('div');
    const prof = document.createElement('div');
    const dep = document.createElement('div');
    const hr = document.createElement('div');
    const dias = document.createElement('div');
    const per = document.createElement('div');
    const obs = document.createElement('div');
    const link = document.createElement('a');

    // Week days
    const weekHolder = document.createElement('div');
    for (i = 0; i < 5; i++) {
        const dayButton = document.createElement('div');
        dayButton.innerHTML = diasDaSemanaA[i];
        dayButton.className = "dayButton";
        if (d.dias.includes(i)) {
            dayButton.className += " active";
        }
        weekHolder.appendChild(dayButton);
    }
    weekHolder.className = 'weekHolder';

    if (d.dias.includes(5)) {
        weekHolder.innerHTML = diasDaSemana[5];
    }

    // Set classes
    el.className = "box"
    title.className = "boxTitle"
    prof.className = "boxInfos"
    dep.className = "boxInfos"
    hr.className = "boxInfos"
    dias.className = "boxInfos"
    per.className = "boxInfos"
    obs.className = "boxInfos"
    link.className = "buttonInfos"

    // Prep var
    const horarios = d.horario.split(' ');
    let observa = "";
    if (d.obs != "") {
        observa = "Observação: " + d.obs;
    }

    // Inflate with information
    title.innerHTML = d.nome + " (" + d.codigo + ")";
    prof.innerHTML = mis + "supervisor_account" + mif + "<div style=\"display:inline\">" + d.prof + "</div>";
    dep.innerHTML = mis + "business" + mif + d.dep;
    hr.innerHTML = mis + "schedule" + mif + horarios[0] + " às " + horarios[1];
    dias.innerHTML = mis + "event" + mif;
    dias.appendChild(weekHolder);
    per.innerHTML = "<br/>Período: De " + d.inicio + " a " + d.fim;
    obs.innerHTML = observa;

    // Remove hours from type 5 date
    if (d.dias.includes(5)) {
        hr.style.display = "none";
    }
    
    // Link to page
    if (d.link) {
        link.innerHTML = "Ver ficha";
        link.href = d.link;   
        link.target = "_blank";   
    } else {
        link.style.display = "none";
    }

    // Resize title
    if (title.innerHTML.length > 80) {
        title.style.fontSize = "9pt";
    } else if (title.innerHTML.length > 50) {
        title.style.fontSize = "10pt"
    }

    // Change color
    if (!d.color) {
        d.color = getColor()
    }

    el.style.background = d.color

    // Append to div

    el.appendChild(title);
    el.appendChild(prof);
    el.appendChild(hr);
    el.appendChild(dias);
    el.appendChild(dep);
    el.appendChild(per);
    el.appendChild(obs);
    el.appendChild(link);

    // Set toggle
    el.state = false;
    el.style.height = "60px"
    el.onclick = () => {
        if (el.state) {
            console.log("closed");
            el.style.height = "60px"
            el.state = false;
        } else {
            console.log("open");
            el.style.height = "340px";
            el.state = true;
        }
    }

    return el;
}

function cycle(c) {
    for (let i = 1; i <= 4; i++) {
        if (c <= 4) {
        document.getElementById("s"+i).className = "cycle";
        }
    }

    switch (c) {
        case 1:
            if (selectedCycle != 1) {
                inflateScreen(1);
                document.getElementById("s"+c).className = "cycle selected";
            } else {
                popup("Esse ciclo já está selecionado.");
            }
            break;
        case 2:
            if (selectedCycle != 2) {
                inflateScreen(2);
                document.getElementById("s"+c).className = "cycle selected";
            } else {
                popup("Esse ciclo já está selecionado.");
            }
            break;
        case 3:
            if (selectedCycle != 3) {
                inflateScreen(3);
                document.getElementById("s"+c).className = "cycle selected";
            } else {
                popup("Esse ciclo já está selecionado.");
            }
            break;
        case 4:
            if (selectedCycle != 4) {
                inflateScreen(4);
                document.getElementById("s"+c).className = "cycle selected";
            } else {
                popup("Esse ciclo já está selecionado.");
            }
            break;
        default:
            break;
    }

    selectedCycle = c;
}

function getColor() {
    if (hue > 360) {
        hue -= 360;
    } else {
        hue += 22
    }

    let v1 = hue;
    let v2 = "80%";
    let v3 = "40%";
    let v4 = "50%";


    return "linear-gradient(45deg, hsl(" + v1 + ", " + v2 + ", " + v3 + ") 0%, hsl(" + v1 + ", " + v2 + ", " + v4 + ") 100%)"
    //return "hsl(" + v1 + ", " + v2 + ", " + v3 + ")";
}

function popup(text) {
    const popup = document.createElement('div');
    popup.innerHTML = text;
    popup.className = "box";
    popup.style.maxWidth = "300px";
    popup.style.fontWeight = "normal"
    popup.style.backgroundColor = "#303030";
    popup.style.color = "white"
    popup.style.cursor = "default"

    setTimeout(() => {
        popup.style.opacity = "0"
    }, 3000)

    setTimeout(() => {
        popup.style.display = "none"
    }, 3500)

    popup.onclick = () => {popup.style.display = "none"}

    document.querySelector("#popup").append(popup);
}

let click = 0;
document.getElementById("logo").addEventListener("click", () => {
    click++;
    if (click == 40) {
        popup("<a style=\"color:white\" href=\"https://drive.google.com/file/d/1BP0GXBqwXY0zBknl9FcXFWPmmUklWjEI/view?usp=sharing\">condução.gif</a>");
        click = 0;
    }
})