class Profe {
    constructor(nombre, deporte, horario) {
        this.nombre = nombre;
        this.deporte = deporte;
        this.horario = horario;
    }
    horarioProfe() {
        if (ingresarDeporte.toLowerCase() == "futbol" || ingresarDeporte.toLowerCase() == "fútbol") {
            const disponible = horarioFutbol.filter(elemento => elemento < 10);
            alert("Profesor: " + profeFutbol.nombre + "\nTiene disponible en el horario: " + disponible);
        }
        else if (ingresarDeporte.toLowerCase() == "handball") {
            const disponible = horarioHandball.filter(elemento => elemento > 12);
            alert("Profesor: " + profeHandball.nombre + "\nTiene disponible en el horario: " + disponible);
        }
        else if (ingresarDeporte.toLowerCase() == "volleyball") {
            const disponible = horarioVolley.filter(elemento => (elemento < 19 && elemento > 16));
            alert("Profesor: " + profeVolley.nombre + "\nTiene disponible en el horario: " + disponible);
        }
        else if (ingresarDeporte.toLowerCase() == "libre" || ingresarDeporte.toLowerCase() == "entrenamiento libre") {
            const disponible = horarioLibre.filter(elemento => elemento == 20);
            alert("Profesor: " + profeLibre.nombre + "\nTiene disponible en el horario: " + disponible);
        }
    }
    agendado() {
        alert("Muchas gracias " + ingresarNombre + " fue agendado correctamente.\nLe enviaremos un mail de confirmación al siguiente correo: " + ingresarMail)
    }
}
// Profesores
const profeFutbol = new Profe("Matias", "Futbol", "Matutino");
const profeHandball = new Profe("Mateo", "Handball", "Matutino o vespertino");
const profeVolley = new Profe("Juan", "Volleyball", "Vespertino");
const profeLibre = new Profe("Mario", "Entrenamiento Libre", "Nocturno");

// Horarios determinados de cada profesor
const horarioFutbol = [8, 9, 10, 11, 12];
const horarioHandball = [8, 9, 10, 11, 12, 14, 15, 16, 17];
const horarioVolley = [15, 16, 17, 18, 19];
const horarioLibre = [19, 20, 21, 22];

// Ingreso del nombre, mail y  validación
let ingresarNombre = prompt("Ingrese su nombre completo: ")
let ingresarMail = prompt("Ingrese su correo de mail: ")
while (ingresarNombre == "" || ingresarMail == "") {
    alert("No ingreso alguno de los datos solicitados: Nombre o Mail");
    ingresarNombre = prompt("Ingrese su nombre completo: ");
    ingresarMail = prompt("Ingrese su correo de mail: ");
}
// Validar si ingreso un número
function horas(ingresarHorario) {
    if (isNaN(ingresarHorario)) {
        alert('No ingrestaste un numero! Vuelve a completar los datos.');
    }
    return ingresarHorario;
}

// Ingreso del deporte y horario que se quiere agendar
let arrayAgenda = [];
let ingresarDeporte = prompt("Ingresar que deporte desea practicar: \n-Fútbol \n-Handball \n-Volleyball \n-Entrenamiento Libre \n- Salir");
let ingresarHorario = 0;

while (ingresarDeporte.toLowerCase() != "salir") {
    switch (ingresarDeporte.toLowerCase()) {
        case "fútbol":
        case "futbol":
            profeFutbol.horarioProfe();
            ingresarHorario = parseInt(prompt("Ingresar horario de preferencia: "));
            horas(ingresarHorario);
            while (ingresarHorario < 8 || ingresarHorario > 9) {
                alert("Debe elegir un horario disponible:\n8hrs\n9hrs");
                ingresarHorario = parseInt(prompt("Ingresar horario " + profeFutbol.horario + ":"));
                horas(ingresarHorario);
            }
            if (isNaN(ingresarHorario) == false) {
                profeFutbol.agendado();
                arrayAgenda.push(new Profe(profeFutbol.nombre, profeFutbol.deporte, ingresarHorario));
            }
            break;
        case "handball":
            profeHandball.horarioProfe();
            ingresarHorario = parseInt(prompt("Ingresar horario de preferencia: "));
            horas(ingresarHorario);
            while (ingresarHorario < 14 || ingresarHorario > 17) {
                alert("Debe elegir un horario disponible:\n14hrs\n15hrs\n16hrs\n17hrs ");
                ingresarHorario = parseInt(prompt("Ingresar horario " + profeHandball.horario + ":"));
                horas(ingresarHorario);
            }
            if (isNaN(ingresarHorario) == false) {
                profeHandball.agendado();
                arrayAgenda.push(new Profe(profeHandball.nombre, profeHandball.deporte, ingresarHorario));
            }
            break;
        case "volleyball":
            profeVolley.horarioProfe();
            ingresarHorario = parseInt(prompt("Ingresar horario de preferencia: "));
            horas(ingresarHorario);
            while (ingresarHorario < 17 || ingresarHorario > 18) {
                alert("Debe elegir un horario disponible:\n17hrs \n18hrs");
                ingresarHorario = parseInt(prompt("Ingresar horario " + profeVolley.horario + ":"));
                horas(ingresarHorario);
            }
            if (isNaN(ingresarHorario) == false) {
                profeVolley.agendado();
                arrayAgenda.push(new Profe(profeVolley.nombre, profeVolley.deporte, ingresarHorario));
            }
            break;
        case "libre":
        case "entrenamiento libre":
            profeLibre.horarioProfe();
            ingresarHorario = parseInt(prompt("Ingresar horario de preferencia: "));
            horas(ingresarHorario);
            while (ingresarHorario !== 20) {
                alert("Debe elegir un horario disponible:\n20hrs");
                ingresarHorario = parseInt(prompt("Ingresar horario " + profeVolley.horario + ":"));
                horas(ingresarHorario);
            }
            if (isNaN(ingresarHorario) == false) {
                profeLibre.agendado();
                arrayAgenda.push(new Profe(profeLibre.nombre, profeLibre.deporte, ingresarHorario));
            }
            break;
        default:
            alert("Debe elegir alguna de las opciones disponibles: Fútbol, Handball, Volleyball, Libre o Salir")
    }
    ingresarDeporte = prompt("Ingresar que deporte desea practicar: \n-Fútbol \n-Handball \n-Volleyball \n-Entrenamiento Libre \n- Salir");
}

console.log(arrayAgenda);

// Ordenar horarios del día
let ordenarHorario = [];
ordenarHorario = arrayAgenda.map(elemento => elemento);
ordenarHorario = arrayAgenda;
ordenarHorario.sort(function (a, b) {
    return a.horario - b.horario;
});
console.log("Agenda del día ordenada de forma ascendente: ")
console.log(ordenarHorario);