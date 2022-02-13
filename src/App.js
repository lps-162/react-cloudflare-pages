import './App.css';
import {
  Container,
  Box,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

function App() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <Container>
      <h3>Super cool apps with React, Cloudflare</h3>
      <Box>
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
      </Box>
    </Container>
  );
}

export default App;
