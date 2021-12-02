import { FormGroup, FormLabel } from '@mui/material';
import React, { FunctionComponent } from 'react';

interface Props {
  label: string;
}

export const LabeledFormGroup: FunctionComponent<Props> = ({
  label,
  children,
}) => (
  <FormGroup sx={{ marginTop: '1rem' }}>
    <FormLabel sx={{ marginBottom: '0.25rem' }}>{label}</FormLabel>
    {children}
  </FormGroup>
);
