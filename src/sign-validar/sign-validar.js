export function   SignValidar  (us,pass)  {
        console.log(`usu ${us} pass ${pass}`)
        var salida = true
        if (typeof us === 'undefined' || us === '' || us === null) {
            alert('Deve cargar un usuario');
            salida = false
        }
        if (typeof pass === 'undefined' ||pass === '' || pass === null) {
            alert('Deve cargar un password');
            salida = false
        }
        return salida
}