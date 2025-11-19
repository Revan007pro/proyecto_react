function Admi() {
  return (
    <div className="admin-page">
      <header className="admin-header">Bienvenido al Panel de Control</header>
      <main className="admin-main">

        <div className="bage_admi">
          <p>Perfil:</p>
          <b className="error_raro">Administrador</b>
          <a className="error_raro">🔔</a>
          <a className="error_raro">👤</a>

          <span id="arrow" onClick={()=>{
            document.getElementById("lista_bage").classList.toggle("show")
            document.addEventListener("keydown",(e)=>{
                if (e.key=="Escape") {
                     console.log("detectando escape")
                     document.getElementById("lista_bage").classList.remove("show")
                }
            })
          }}>⮟</span><ul id="lista_bage" className="dropdown">
          <li className="lista">Nombre</li>
          <li className="lista">Cerrar</li>
        </ul>

        </div>
        
      </main>
    </div>
  );
}

export default Admi;
