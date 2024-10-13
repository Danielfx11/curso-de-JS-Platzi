

let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('accion de listar');
        break;
    case 'guardar':
        console.log('accion de guardar')
        break;
    case 'actualizar':
        console.log('Base de datos Actualizada')
        break;
    default:
        console.log('Accion no reconocida'); 
}