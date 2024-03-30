import './App.css'
import { Heading } from "@chakra-ui/react"
import { COLORS } from './constants/colors'

function App() {
  return (
    <>
      <Heading
        as={'h6'}
        alignItems={'center'}
        color={COLORS.black}
        fontSize={'4.5rem'}
        fontWeight={600}
      >
        Account Management Page
      </Heading>
    </>
  )
}

export default App
