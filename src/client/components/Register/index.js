import React, { useReducer } from "react";
import { FormGroup, Button, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import initialState from './initialState'
import reducer from './reducer'
import {schema} from './schema';

const parseJpyErrors = (array) => {
  const errorObject = {}
  array.map(el => {
    errorObject[el.context.key]= el.message
  })
  return errorObject
}

export default ({submitForm}) => {
  const { model } = initialState
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = () => {
    const validate = schema.validate(state.form)
    if(validate.error){
      const errors = parseJpyErrors(validate.error.details)
      dispatch({type: 'SET_ERRORS', payload: errors})
    }
    else {
      submitForm(state.form)
    }
  }
  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>
          <Row>
            {
              model.map( el => (
                <Col xs={12}>
                  <FormGroup>
                    <Input
                      type={el.type}
                      name={el.id}
                      id={el.id}
                      value={state.form[el.id]}
                      onChange={e => dispatch({type: 'ON_CHANGE', payload: e.target})}
                      placeholder={el.label}
                    />
                    <span className="error">{state.errors[el.id] || ''}</span>
                  </FormGroup>
                </Col>
              ))
            }
            <Col>
              <Button outline color="primary" onClick={onSubmit}>
                Entrar
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
