import { SxProps } from '@mui/system';

export function makeStyles<T extends Record<string, SxProps>>(cfg: T): T {
  return cfg;
}
