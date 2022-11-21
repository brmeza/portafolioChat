
let cadena, codigo, respuesta,texto;
let nivel=0;

//nivel de contacto sera igual a 1
//EXPRECIONES REGULARES 
let inicial= RegExp("(HOLA|OLA|BUENAS|SALUDOS|HI|HOLI|DIAS|TARDES|NOCHES)");
let saberSobreEl= RegExp("(SABER|EL|SOBRE)");
let conocimientos= RegExp("(CONOCIMIENTOS|SABE)");
let servicios= RegExp("(SERVICIOS|SERVICIO)");
let proyectos= RegExp("(PROYECTO|PROYECTOS)");
let contactarlo= RegExp("(CONTACTARLO|CONTACTO|CONTACTA|CONTACTAME)");
let gracias= RegExp("(GRACIAS|GRACI|SALIR|ME VOY)");
let temas= RegExp("(TEMAS|TEMA)");
let chetsitto=RegExp("(TU|NOMBRE|ERES|LLAMAS)")


//expreg de nivel de contacto
let corr = RegExp("(CORRE|CORREO)");
let celular = RegExp("(CELULAR|CELU)");
let correo = /[A-Za-z]+@[a-z]+\.[a-z]/i;
let telefono = RegExp ("(\\d{10}|\\d{3} \\d{3} \\d{4})");

function niveles () {
    cadena=document.getElementById("txtPregunta").value;
    cadena=cadena.toUpperCase(); 
    
    if (nivel==0) {
        evaluarCaso();
    } else if(nivel==6) {
        console.log("caso6");
        if (corr.test(cadena)) {
            mensaje="🤖vale en ese caso digita tu correo😁";
            nivel=61;
        }else if(celular.test(cadena)){
            mensaje="🤖vale en ese caso digita tu numero de telefono😁";
            nivel=62;
        }else{
            mensaje="no entendi😧";
        }
    }else if(nivel==61){
        if (correo.test(cadena)) {
            mensaje="gracias por enviar tu correo ya nos contactaremos contigo😁😁";
            nivel=0;
        } else if(gracias.test(cadena)){
            mensaje="volvemos al principio...";
            nivel=0;
        }else {
            mensaje="creo que tu correo esta mal digitado,😱😱😱 intentalo nuevamente o dime si ya no quieres que te contactemos, en ese caso dime si quieres puedes decirme salir<br> ✅salir"
        }
    }else if(nivel==62){
        if (telefono.test(cadena)) {
            mensaje="ya tengo tu numero de telefono, ya le dire al inge que se ponga en contacto contigo";
            nivel=0;
        } else if(gracias.test(cadena)){
            mensaje="volvemos al principio...";
            nivel=0;
        } else {
            mensaje="creo que tu numero esta mal digitado, intentalo nuevamente <br><br> UN EJEMPLO SERIA 1112223344 <br><br>O dime si ya no quieres que te contactemos, en ese caso dime si quieres puedes decirme <br> ✅salir"
        }
    }
    document.getElementById("txtPregunta").value = "";
    document.getElementById("respuesta").innerHTML=mensaje;
}


function evaluarCaso(){

    if (inicial.test(cadena)) {
        codigo=1;
    }else if(saberSobreEl.test(cadena)){
        codigo=2;
    }else if(conocimientos.test(cadena)){
        codigo=3;
    }else if(servicios.test(cadena)){
        codigo=4;
    }else if(proyectos.test(cadena)){
        codigo=5;
    }else if(contactarlo.test(cadena)){
        codigo=6;
    }else if(gracias.test(cadena)){
        codigo=7;
    }else if(temas.test(cadena)){
        codigo=8;
    }else if(chetsitto.test(cadena)){
        codigo=9;
    }else{
        codigo=10;
    }
    responder();
}

function responder(){
    switch (codigo) {
        case 1:
            mensaje="👾Hola y bienvenido, soy el asistente virtual🤖 del ingeniero informático BRAYAN MEZA😎 mi nombre es chetsito, en que te puedo ayudar:😛 <br> <br>"+
            "✅ SOBRE EL.<br>"+
            "✅ CONOCIMIENTOS.<br>"+
            "✅ SERVICIOS.<br>"+
            "✅ PROYECTOS.<br>"+
            "✅ CONTACTO<br>";
            break;
        case 2:
            mensaje="👾¡¡Claro que sí!!🤖, actualmente está culminando su carrera en la institución universitaria Colegio Mayor Del cauca en el programa de ingeniería informática además de formación en desarrollador Full-Stack😎 con Oracle One. Estaría muy encantado de poder trabajar para ti. algo mas que quieras saber:😁😁<br> <br>"+
            "✅ CONOCIMIENTOS.<br>"+
            "✅ SERVICIOS.<br>"+
            "✅ PROYECTOS.<br>"+
            "✅ CONTACTO<br><br>"+
            "¡¡Algo más que pueda hacer por ti!! Recuerda que estoy aquí para ayudarte.";
            break;
        case 3:
            mensaje="El ingeniero Brayan Meza enfocado en desarrollador 👾Full-Stack cuenta con conocimientos en el Desarrollo y arquitectura de sitios web, diseño de interfases de usuario y elementos front-End. Desarrollar aplicaciones back-end. Aseguramiento y optimización de sitios web e interfases de usuario como la escalabilidad de tu sitio web. ¡¡Genial no!! Que esperas para decidirte a trabajar con él. Si es así puedes contactarlo o decirme algo mas en lo que te pueda ayudar.<br><br>"+
            "✅ SOBRE EL.<br>"+
            "✅ SERVICIOS.<br>"+
            "✅ PROYECTOS.<br>"+
            "✅ CONTACTO<br>";
            break;
            
        case 4:
            mensaje="El ingeniero Brayan meza cuenta con un amplio campo de conocimiento para ofrecerte en el desarrollo de tu aplicación o servicio web como lo es: 😁😁<br>"+
            "👉 Desarrollar la arquitectura del sitio web.<br>"+
            "👉 Diseñar interfaces de usuario y otros componentes Front End.<br>"+
            "👉 Desarrollar aplicaciones Back End.<br>"+
            "👉 Crear bases de datos y servidores.<br>"+
            "👉 Supervisar la velocidad y escalabilidad del software.<br>"+
            "👉 Gestionar proyectos complejos.<br>"+
            "Espero que la información suministrada te sea de gran ayuda para que decidas ponerte en contacto inmediato. Recuerda estoy aquí para ayudarte…😁😁<br>"+
            "✅ SOBRE EL.<br>"+
            "✅ CONOCIMIENTOS.<br>"+
            "✅ PROYECTOS.<br>"+
            "✅ CONTACTO<br>";
            break;
        case 5:
            mensaje="🤖¡¡CLARO!! A lo largo de su carrera a trabajado en proyectos universitarios para la culminación de su carrera, así como retos de su otra academia de estudio te dejare algunos enlaces de algunos de sus proyectos que se encuentran en la web:<br>"+
            "URL: <br> URL: <br>"+
            "Espero que te haya gustado mucho su trabajo. Algo mas en lo que te pueda colaborar😁😁.<br>"+
            "✅ SOBRE EL.<br>"+
            "✅ CONOCIMIENTOS.<br>"+
            "✅ SERVICIOS.<br>"+
            "✅ CONTACTO<br>";
            break;
        case 6:
            mensaje="🤖¡¡Genial!! para comunicarte con el puedes enviar un msj a su correo electronico brayanmesz1998@gmail.com😁😁<br> <br>"+
            " en la parte inferior te puedo redireccionar a sus redes <br>"+
            "o dime si quieres que te contacte a una de estas opciones <br><br> ✅celular <br>✅correo";
            nivel = 6;
            break;
        case 7:
            mensaje="Espero que mi servicio haya sido de tu agrado. Recuerda soy el y estaré aquí para lo que necesites…😆😆";
            break;
        case 8:
            mensaje="los temas son los siguientes referentes al portafolio del ing brayan meza <br>"+
            "✅ SOBRE EL.<br>"+
            "✅ CONOCIMIENTOS.<br>"+
            "✅ SERVICIOS.<br>"+
            "✅ PROYECTOS.<br>"+
            "✅ CONTACTO<br>";
            break;
        case 9:
            mensaje="hola recuerda mi nombre es chetsito🤖 y estoy aqui para ayudarte a contactar al ingeniero y saber infomracion detallada de el como los siguientes temas😆😆"+
            "✅ SOBRE EL.<br>"+
            "✅ CONOCIMIENTOS.<br>"+
            "✅ SERVICIOS.<br>"+
            "✅ PROYECTOS.<br>"+
            "✅ CONTACTO<br>";
            break;
        case 10:
            let nem = 1 + Math.floor(Math.random()*4);
            if (nem==1) {
                mensaje="Lo siento tu mensaje no fue lo suficinete mente claro...😩";
            }else if (nem==2){
                mensaje="Solo puedo hablar de los temas que te he propuesto..🥺<br><br>"+
                "✅ TEMAS";
            }
            else if (nem==3){
                mensaje="No estamos teniendo una buena comunicacion😕 te solicito que seas mas claro🥺";
            }
            else if (nem==4){
                mensaje="Te pido que seas mas especifico en lo que me dices😧";
            }else if(nem==5){
                mensaje="No soy adivido para entender lo que me quieres decir";
            }else if(nem==6){
                mensaje="Se mas claro.. por favor!!😧";
            }else if(nem=7){
                mensaje="Tu mensaje no es lo bastante claro!!!😕";
            }else if(nem==8){
                mensaje="Vamos resume lo que me quieres decir...😕";
            }else if(nem==9){
                mensaje="f en el chat..😕😕😕";
            }
            break;
        default:
            mensaje="f en el chat.."
            break;
    }
    document.getElementById("respuesta").innerHTML=mensaje;
}

