import {
  Container,
  Box,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

function App() {

  return (
    <Container>
      <h1>Super cool apps with React</h1>
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
