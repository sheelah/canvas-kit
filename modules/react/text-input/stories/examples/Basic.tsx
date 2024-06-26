/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react';
import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Email</FormField.Label>
      <FormField.Input as={TextInput} onChange={handleChange} value={value} />
    </FormField>
  );
};
