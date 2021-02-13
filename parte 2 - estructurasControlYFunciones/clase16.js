/*
Una ultima estructura de control se llama switch. Switch se utiliza para realizar
diferentes acciones basadas en múltiples condiciones.

Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.

Break, sirve para que el browser se salte un bucle.
*/
var signo = prompt('¿Cual es tu signo?');

console.log(signo);

switch (signo) {
    case 'aries':
    case 'Aries':
        console.log('a buena comunicación y cierta tolerancia serán indispensables para mantener la armonía familiar. Mantén tu diplomacia.')
        break;
    case 'tauro':
    case 'Tauro':
        console.log('Necesitas un ambiente cálido para sentirte feliz, no esperes que lo proporcionen los demás. Ve a eventos que te generen bienestar.')
        break;
    case 'géminis':
    case 'geminis':
    case 'Géminis':
    case 'Geminis':
        console.log('Debes saber que no eres el centro del mundo. Las personas de tu alrededor tienen sus propios problemas que resolver.')
        break;
    case 'cancer':
    case 'Cancer':
        console.log('Comienza el día con tranquilidad y calma. No permitas que discusiones sobre temas poco importantes te alteren los nervios.')
        break;
    case 'leo':
    case 'Leo':
        console.log('Intenta la persuasión antes que la obstinación. Es un mejor recurso y habla bien de tus dotes de convicción.')
        break;
    case 'virgo':
    case 'Virgo':
        console.log('El hogar es el centro del mundo. Invitarás a grupos reducidos de familiares y amigos a compartir tu espacio. Disfrutarás a pleno de tus seres queridos, respetando siempre las medidas de cuidado por la pandemia.')
        break;
    case 'libra':
    case 'Libra':
        console.log('Estás lleno de energía hoy. Aférrate a asuntos profesionales y aborda tus objetivos y estrategias a largo plazo. Concéntrate.')
        break;
    case 'escorpión':
    case 'Escorpión':
    case 'Escorpion':
    case 'escorpion':
    case 'escorpio':
    case 'Escorpio':
        console.log('Las oportunidades de superación personal exigen de disciplina y entrega en donde necesitarás con urgencia ser aplicado.')
        break;
    case 'sagitario':
    case 'Sagitario':
        console.log('Pon los pies en la tierra. Buscarás cumplir con tus objetivos laborales. Lograr tus planes redundará en lo económico y lo familiar.')
        break;
    case 'capricornio':
    case 'Capricornio':
        console.log('Percibes con claridad lo más conveniente y sabes adelantarte a los errores. Haz caso a tu intuición.')
        break;
    case 'acuario':
    case 'Acuario':
        console.log('Dedicarás toda tu atención y energías a solucionar un conflicto. Familiares y amigos estarán agradecidos con tu gesto solidario.')
        break;
    case 'piscis':
    case 'Piscis':
        console.log('Acercamientos suaves y pausados. Personas cercanas buscan tu presencia, te sientes a gusto, aunque sean personas diferentes.')
        break;
    default:
        console.log('No es un signo zodiacal válido')
}