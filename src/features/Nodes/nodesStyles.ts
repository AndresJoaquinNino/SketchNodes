import styled from 'styled-components'

export const ShapesBox = styled.aside({
  position: 'fixed',
  left: '1%',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'white',
  borderRadius: '5px',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: '#3A3A3A',
  padding: '.5rem',
  boxShadow: '3px 3px 5px #0000004d',
  zIndex: 5
})

export const ShapesContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.5rem',
})