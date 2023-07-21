import { useState } from 'react'
import {Card,CardImg,FormControl} from 'react-bootstrap'

const MyUsers = ({usuarios,deleteUsuario}) => {
  
  return (
    <>
    {usuarios?.map((u,i)=>{
        return(
        <Card key={i} className='m-4'>
            <Card.Header>
            <CardImg src={u.img} variant={top} width={'90px'}/>
            <Card.Text>
            {u.name} {u.last}
            </Card.Text>
            </Card.Header>
            <Card.Body>
            <FormControl
            className='m-1 w-75' 
                value="Borrar"
                onClick={()=>deleteUsuario(`${u._id}`)}
                type="button"/>
                <FormControl
                className='m-1 w-75' 
                value="modificar"
                type="button"/>
                </Card.Body>
        </Card>)
      })}
    
      </>
  )
}

export default MyUsers