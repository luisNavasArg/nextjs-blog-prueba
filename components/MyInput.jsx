import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
const MyInput = ({ nameInput, inputRef, inputType, text, errors }) => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="password">{text}</InputGroup.Text>
            <Form.Control type={inputType} name={nameInput} aria-describedby={nameInput} ref={inputRef} />
            <Form.Text className="text-danger">
                {errors.nameInput?.message}
            </Form.Text>
        </InputGroup>
    )
}
export default MyInput