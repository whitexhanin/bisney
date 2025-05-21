import { style } from "@vanilla-extract/css";

export const wrap = style({
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
})

export const title = style({
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
})

export const avatarList = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '20px',
    padding: '0',
    listStyle: 'none',
    marginBottom: '30px',
})

export const pickItem = style({
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    border: '2px solid transparent',
    selectors: {
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
        '&.selected': {
            borderColor: '#02d6e8',
            backgroundColor: '#e6f7f8',
        }
    }
})

export const avatarImage = style({
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    display: 'block',
})

export const completeButton = style({
    display: 'block',
    width: '100%',
    maxWidth: '200px',
    margin: '0 auto',
    padding: '12px 24px',
    backgroundColor: '#02d6e8',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    selectors: {
        '&:hover': {
            backgroundColor: '#00b8c8',
            transform: 'translateY(-1px)',
        },
        '&:active': {
            transform: 'translateY(0)',
        }
    }
})