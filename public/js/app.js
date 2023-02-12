document.addEventListener('DOMContentLoaded', function(){
    desplegarEndPoint();
});


function desplegarEndPoint(){
    const desplegarEnd = document.querySelectorAll('.row');
    
    desplegarEnd.forEach(desplegado => {
        desplegado.addEventListener('click', () => {
            desplegado.classList.toggle('arrow_icon_abajo');

            let endpoint = desplegado.nextElementSibling;
            endpoint.classList.toggle('endpoint_consumo_on');
        });
    });
}
