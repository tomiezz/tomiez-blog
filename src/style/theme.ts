export interface CustomTheme {
  palete: {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
}

export const theme: CustomTheme = {
  palete: {
    primary: '#1976d2',
    secondary: '#dc004e',
    error: '#f44336',
    warning: '#ff9800',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
};
