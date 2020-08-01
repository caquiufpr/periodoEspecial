const diasDaSemana = ["Segundas", "Terças", "Quartas", "Quintas", "Sextas", "Horário Variado"]
let hue = -20;
let selectedCycle = 1;

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
            default:
                break;
        }
        
    }
}

inflateScreen(1);

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

    // Set toggle
    el.style.height = "60px"
    el.state = false
    el.onclick = () => {
        if (el.state) {
            console.log("closed");
            el.style.height = "60px"
            el.state = false;
        } else {
            console.log("open");
            el.style.height = "250px"
            el.state = true;
        }
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

    // Prep var
    const horarios = d.horario.split(' ');
    let diasH = "";
    d.dias.map(dia => {diasH += (diasDaSemana[dia] + " ")})
    let observa = "";
    if (d.obs != "") {
        observa = "Observação: " + d.obs;
    }

    // Inflate with information
    title.innerHTML = d.nome + " (" + d.codigo + ")";
    prof.innerHTML = "Professor(a): " + d.prof;
    dep.innerHTML = "Departamento: " + d.dep;
    hr.innerHTML = "Horário: " + horarios[0] + " às " + horarios[1];
    dias.innerHTML = "Dias: " + diasH;
    per.innerHTML = "Período: De " + d.inicio + " a " + d.fim;
    obs.innerHTML = observa;

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
    el.appendChild(dep);
    el.appendChild(hr);
    el.appendChild(dias);
    el.appendChild(per);
    el.appendChild(obs);

    return el;
}

function cycle(c) {
    for (let i = 1; i <= 3; i++) {
        if (c <= 3) {
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
                popup("Grade atualizada às 22h00 do dia 31/07, a partir das informações no site da coordenação.");
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
        popup("Ei, para de clicar aí");
    }
    if (click == 60) {
        popup("É sério");
    }
    if (click == 80) {
        document.getElementById("logo").style.display = "none";
    }
})