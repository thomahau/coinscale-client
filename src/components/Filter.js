import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const Filter = () => (
  <Form inline>
    <FormGroup>
      <Label className="mr-lg-2">Filter:</Label>
      <Input type="text" size="sm" className="mr-md-2" />
      <Button color="success" size="sm">
        Apply
      </Button>
    </FormGroup>
  </Form>
);

export default Filter;
