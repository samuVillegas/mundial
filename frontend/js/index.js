document.addEventListener('DOMContentLoaded',async()=>{
    const data = await fetch('http://localhost:6040/federacion').then(res => res.json()).catch(err => console.log(err))
    console.log(data)
})


const enviar = async () =>{
    fetch('http://localhost:6040/federacion',{
        method:"POST",
        body:JSON.stringify(
            {
                codigo_federacion:"P122", 
                acronimo:"P2DD", 
                nombre:"pRUEBA", 
                cantidad_selecciones:20, 
                fecha_creacion:"1890-03-11"
            }
        ),
        headers:{
            'Content-Type': 'application/json'
          }
    }).then(res=>res.json()).then(json=>console.log(json))
}