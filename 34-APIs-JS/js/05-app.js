document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Ejecutar la funcion para reproducir el vide....');
    } else {
        console.log('Pausar el video');
    }
});