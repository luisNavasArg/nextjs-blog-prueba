import {Button,Card, Container,Form} from 'react-bootstrap';
import React from 'react';
import {useForm} from 'react-hook-form'
// import '../index.css'
function MyForm() {
  //traemos register
  const {register,handleSubmit,formState:{errors},reset}=useForm()
  const onSubmit=(user)=>{
    console.log(user);
  }
  return (
    <Container className="mainSection d-flex justify-content-center" >
      <Card style={{width:"400px"}}>
        <Card.Header as="h5">Ingresar</Card.Header>
        <Card.Body>
      <Form className="bg-primary p-3 bg-opacity-25" onSubmit={handleSubmit(onSubmit)}>      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
                type="email"
                placeholder='Ingresá el email'
                {...register("email", {
                  required: 'Hay que llenar el campo del email es obligatorio',
                  pattern: {
                    value: /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
                    message: "El formato de email es incorrecto"
                  }
                })} />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
              type="password"
              placeholder='Ingresá tu contraseña'
              {...register("password",{
                required:"El campo de password es obligatorio"
              })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        label="Recordarme"
        {...register("rememberme")} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
      Ingresar
    </Button>
    </Form>
        </Card.Body>
      </Card>
    </Container>
    
  );
}
export default MyForm;