import styled from 'styled-components';

// Theme colors
const theme = {
  primary: '#FFE433',
  primaryHover: '#FFD700',
  text: '#333333',
  background: '#ffffff',
  darkBackground: '#1a1a1a',
  white: '#ffffff',
  maxWidth: '1200px',
  spacing: '0.5rem',
};

// Main container for the app
export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.background};
  color: ${theme.text};
`;

// Main content area
export const MainContent = styled.main`
  margin-top: 5rem; /* Adjusted to match Header height */
  padding: 2rem;
  max-width: ${theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

// Card component with shadow and padding
export const Card = styled.div`
  padding: 2em;
  background-color: ${theme.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;

// Button component with hover and focus states
export const Button = styled.button`
  background-color: ${theme.primary};
  color: ${theme.text};
  border: none;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.primaryHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 228, 51, 0.3);
  }
`;

// Typography components
export const Heading = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  color: ${theme.text};
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: ${theme.text};
`;

// Link component with hover state
export const Link = styled.a`
  color: ${theme.text};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 228, 51, 0.3);
  }
`;

// List components
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

// Responsive design
const responsive = {
  mobile: '@media (max-width: 768px)',
};

// Responsive variants
export const Responsive = {
  Mobile: styled.div`
    ${responsive.mobile} {
      padding: 1rem;
    }
  `,
};

// Dark mode variants
interface DarkModeProps {
  dark?: boolean;
}

export const DarkMode = {
  Container: styled.div<DarkModeProps>`
    ${props => props.dark && `
      background-color: ${theme.darkBackground};
      color: ${theme.white};
    `}
  `,
};
