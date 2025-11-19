import { useNavigate } from 'react-router-dom';
function Registrase_App(){
    const navigate = useNavigate();
    return <div id="contenedor_inicio">
        <form /* action={"#"} method="POST" por ahora no se tiene backend */>
            <h1>Registrarse</h1>
        <label>Nombre: </label> <a><input placeholder="Nombre Completo" className="input-button"/></a>
        <p><label>Apellido: </label> <a><input placeholder="Apellidos Completos" className="input-button"/></a></p>
        <p><label>Email: </label><a className="a"><input style={{ paddingLeft: '0.8em' }} className="input-button" placeholder="correo electronico"></input></a></p>
        <p><label title="Tipo de documento" >Documento: </label><select id="diaNacimiento" name="diaNacimiento">
            <option value="" disabled selected>Seleccionar</option><option value="1">Cedula de Cidudania</option>
    <option value="2">Tarjeta de Identidad</option>
    <option value="3">Cedula de Extrangeria</option>
    <option value="4">Permiso por Proteccion Temporal</option></select></p>
    <p><label>Fecha de Nacimeinto: </label><a><input style={{width: '150px'}} className="input-button" type="date"></input></a></p>
    <p><label>Contraseña: </label><a><input id="primera_contrasenia" style={{width: '215px'}} type="password" className="input-button" placeholder="Ingresar contraseña"></input></a></p>
    <p><label>Contraseña: </label><a><input id="segunda_contrasenia" style={{width: '215px'}} type="password" className="input-button" placeholder="Repetir contraseña"></input></a></p>
    <button id="registrarse" style={{ marginLeft: '110px' }} onClick={()=>{
        alert("Se ha registrado correctamente")
        navigate('/')
    }}>Registrarse</button>
        </form>
    </div>
}

export default Registrase_App;