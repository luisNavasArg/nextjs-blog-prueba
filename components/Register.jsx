import { Form, Container, Card, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import bcrytp from 'bcryptjs'
function Register({ usuarios ,postData}) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async(user) => {
    
  let userNew = usuarios.filter(u => u.email == user.email);
  if(userNew.length!=0){
    Swal.fire(
      'El usuario '+user.email+' ',
      'ya existe!',
      'error'
    )
   }else{
    user.pass=bcrytp.hashSync(user.pass,12);

    let miUser = await postData(user);
    alert(JSON.stringify(user))
      Swal.fire(
        'Se agregó el usuario!',
        `${miUser.name}`,
        'success'
      )
   
   }
  }
  return (
    <Container className="mainSection d-flex justify-content-center">
      <Card className="my-5" style={{width:"400px"}}>
      <Card.Header as="h5">Registrarse</Card.Header>
        <Form onSubmit={handleSubmit(onSubmit)} className='bg-primary p-3 bg-opacity-25 m-4'>
          <InputGroup className="mb-3">
            <InputGroup.Text id="user">Usuario</InputGroup.Text>
            <Form.Control 
              type="text" 
              name="user" aria-describedby="user"
              {...register("user",{required:"El campo Usuario es obligatorio"})}
            />
          </InputGroup>
          <Form.Text className="text-danger">
                      {errors.user?.message}
          </Form.Text>
          <InputGroup className="mb-3">
            <InputGroup.Text id="name">Nombre</InputGroup.Text>
            <Form.Control 
              type="text" 
              name="name" aria-describedby="name"
              {...register("name",{required:"Este campo Nombre es obligatorio"})}
            />
          </InputGroup>
          <Form.Text className="text-danger">
                      {errors.name?.message}
          </Form.Text>

          <InputGroup className="mb-3">
            <InputGroup.Text id="name">Apellido</InputGroup.Text>
            <Form.Control 
              type="text" 
              name="last" aria-describedby="last"
              {...register("last",{required:"Este campo Nombre es obligatorio"})}
            />
          </InputGroup>
          <Form.Text className="text-danger">
                      {errors.last?.message}
          </Form.Text>

          <InputGroup className="mb-3">
            <InputGroup.Text id="email">Email</InputGroup.Text>
            <Form.Control 
              type="text" 
              name="email" aria-describedby="email"
              {...register("email",{required:"Este campo Nombre es obligatorio",
              pattern: {
                value: /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
                message: "El formato de email es incorrecto"
              }})}
            />
          </InputGroup>
          <Form.Text className="text-danger">
                      {errors.email?.message}
          </Form.Text>
          <InputGroup className="mb-3">
            <InputGroup.Text id="email">Contraseña</InputGroup.Text>
            <Form.Control 
              type="text" 
              name="pass" aria-describedby="pass"
              {...register("pass",{required:"Este campo Nombre es obligatorio",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: "La contraseña debe tener al entre 8 y 16 caracteres, número al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos."
              }})}
            />
            </InputGroup>
            <Form.Text className="text-danger">
                      {errors.pass?.message}
          </Form.Text>
            <InputGroup className="mb-3">
            <InputGroup.Text id="img">Url Img</InputGroup.Text>
            <Form.Control 
              type="text" 
              name="img" aria-describedby="img"
              {...register("img",{required:"Este campo Nombre es obligatorio"})}
            />
          </InputGroup>
          <Form.Text className="text-danger">
                      {errors.img?.message}
          </Form.Text>
          <InputGroup className="mb-3">
            <Form.Control
              type='submit'
              aria-label="btn"
              aria-describedby="btn"
              value='Registrarse'
            />
          </InputGroup>
        </Form>
      </Card>
    </Container>
  );
}
export default Register