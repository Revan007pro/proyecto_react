function App(){
  const saludo = 'Login Inicio de sección'
  
  return (
    <div id="contenedor_inicio">
      <h1 className="h1">{saludo}</h1>
      <form>
        <p>
          Nombre: 
          <a>
            <input 
              id="nombre_usuario" 
              className="input-button" 
              placeholder="Nombre usuario o email" 
            />
          </a>
        </p>
        <p>
          Contraseña: 
          <a>
            <input 
              id="contraseña_usuario" 
              className="input-button" 
              type="password" 
            />
          </a>
        </p>
        <p><a>¿No tienes cuenta?</a><a id="registrarse" className="span" onClick={()=>{
          const registrarse=document.getElementById("registrarse")
          registrarse.addEventListener('click', ()=>{
            if (registrarse) {
              window.location.href="/registrarse"
            }
          })
        }}>Registrarse</a></p>
        
        <div className="div-boton">
          <p><button className="button" type="button" onClick={(e)=>{
             e.preventDefault();
            const id_nombre = document.getElementById("nombre_usuario").value.trim()
                const id_contrasania=document.getElementById("contraseña_usuario").value.trim()
                if (id_nombre ==="admi" && id_contrasania==="123") {
                  window.location.href="/admi"
                }else{
                 console.log("no se encontro la")
                }
          } }>Ingresar</button></p>
        </div>
      </form>
    </div>
  );
}

export default App;