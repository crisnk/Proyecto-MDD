import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth.service.js';
import Form from "../components/Form";
import ImgLogo from "../components/ImgLogo";

const Register = () => {

	const navigate = useNavigate();

    const registerSubmit = (data) => {
        register(data).then(() => {
            navigate('/')
        })
    }

	return (
		<main className="container">
			<ImgLogo />
			<Form
				title="Crea tu cuenta"
				fields={[
					{
						label: "Nombre de usuario",
						name: "nombreEmprendedor",
						placeholder: "",
						type: "text",
					},
					{
						label: "Nombre de emprendimiento",
						name: "nombreEmprendimiento",
						placeholder: "",
						type: "text",
					},					
					{
						label: "Número de contacto",
						name: "numeroContacto",
						placeholder: "9 1234 5678",
						type: "tel",
					},
                    {
						label: "Correo electrónico",
                        name: "correo",
                        placeholder: "example@gmail.com",
                        type: "email",
                    },
                    {
						label: "RUT",
                        name: "rutEmprendedor",
                        placeholder: "23.770.330-1",
                        type: "text",
                    },
					{
						label: "Contraseña",
						name: "password",
						placeholder: "*********",
						type: "password",
					},
				]}
				buttonText="Registrarse"
				onSubmit={registerSubmit}
				footerContent={
					<p>
						¿Ya tienes cuenta?, <a href="/">Inicia sesión aquí!</a>
					</p>
				}
			/>
		</main>
	);
};

export default Register;
