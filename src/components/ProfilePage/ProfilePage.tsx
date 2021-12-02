import { Box, Button, Input, InputProps, Typography } from '@mui/material';
import { MainContainer } from 'components/_common/MainContainer/MainContainer.styles';
import React, { FunctionComponent, useState } from 'react';
import InputMask from 'react-input-mask';
import { LabeledFormGroup } from './LabeledFormGroup/LabeledFormGroup';

export const ProfilePage: FunctionComponent = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log({ name, phone });
  };

  return (
    <MainContainer>
      <Typography variant="h4">Your account</Typography>
      <Box sx={{ width: '40%' }}>
        <LabeledFormGroup label="Email">
          <Input disabled />
        </LabeledFormGroup>
        <LabeledFormGroup label="Name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </LabeledFormGroup>
        <LabeledFormGroup label="Phone">
          <InputMask
            mask="+38 (999) 999-99-99"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^\d+]/g, ''))}
            alwaysShowMask
          >
            {(inputProps: InputProps) => <Input {...inputProps} type="tel" />}
          </InputMask>
        </LabeledFormGroup>
      </Box>
      <Button sx={{ marginLeft: 'auto', marginTop: '2rem' }} onClick={onSubmit}>
        Save
      </Button>
    </MainContainer>
  );
};
