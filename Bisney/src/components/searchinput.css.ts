import { style } from '@vanilla-extract/css';

export const searchInput = style({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
});

export const inputStyle = style({
    height:'50px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    marginBottom: '10px',
    fontSize:'18px',
});

export const buttonStyle = style({
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    ':hover': {
        backgroundColor: '#0056b3',
    },
});
