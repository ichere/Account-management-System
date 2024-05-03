import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Text,
  } from '@chakra-ui/react';
  import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
  
  import {
    BUTTON_ICON_SIZE,
    LANDING_PARAGRAPH_FONT,
    LANDING_SUB_HEADER_FONT,
  } from '../constants/appConstants';
  import { COLORS } from '../constants/colors';
  import { FaqData, faqData } from '../data/faq';
  
  const FaqSection = (): JSX.Element => {
    return (
      <Box bg={COLORS.bgGrey} p={['4rem 2rem', '4rem 2rem', '6rem 20rem']}>
        <Box textAlign={'center'} display="flex" justifyContent="center" w="100%">
          <Flex align={'center'}>
            <Text fontWeight="620" color={COLORS.black} fontSize=".90rem">
              WE KNOW YOU HAVE QUESTIONS
            </Text>
          </Flex>
        </Box>
        <Text
          fontWeight="800"
          color={COLORS.black}
          fontSize={LANDING_SUB_HEADER_FONT}
          textAlign="center"
          pb={['3rem', '5rem', '5rem']}
        >
          Frequently Asked Questions
        </Text>
        <Accordion allowToggle color={COLORS.blue}>
          <Flex justify={'space-between'} direction={['column', 'column', 'row']} w="100%">
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[3])].map((data: FaqData, i: number) => (
                <AccordionItem bg="white" mb="2rem" rounded="sm" key={i} width={['100%']}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[4])].map((data: FaqData, i: number) => (
                <AccordionItem bg={COLORS.white} mb={'2rem'} key={i} rounded="sm" width="100%">
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
          </Flex>
          <Flex justify={'space-between'} direction={['column', 'column', 'row']} w="100%">
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[5])].map((data: FaqData, i: number) => (
                <AccordionItem bg="white" mb="2rem" rounded="sm" key={i} width={['100%']}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[6])].map((data: FaqData, i: number) => (
                <AccordionItem bg={COLORS.white} mb={'2rem'} key={i} rounded="sm" width="100%">
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
          </Flex>
          <Flex justify={'space-between'} direction={['column', 'column', 'row']} w="100%">
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[7])].map((data: FaqData, i: number) => (
                <AccordionItem bg="white" mb="2rem" rounded="sm" key={i} width={['100%']}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[8])].map((data: FaqData, i: number) => (
                <AccordionItem bg={COLORS.white} mb={'2rem'} key={i} rounded="sm" width="100%">
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
          </Flex>
          <Flex justify={'space-between'} direction={['column', 'column', 'row']} w="100%">
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[9])].map((data: FaqData, i: number) => (
                <AccordionItem bg="white" mb="2rem" rounded="sm" key={i} width={['100%']}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[10])].map((data: FaqData, i: number) => (
                <AccordionItem bg={COLORS.white} mb={'2rem'} key={i} rounded="sm" width="100%">
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
          </Flex>
          <Flex justify={'space-between'} direction={['column', 'column', 'row']} w="100%">
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[2])].map((data: FaqData, i: number) => (
                <AccordionItem bg="white" mb="2rem" rounded="sm" key={i} width={['100%']}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
            <Box w={['100%', '100%', '47%']}>
              {[...Array(1).fill(faqData[1])].map((data: FaqData, i: number) => (
                <AccordionItem bg={COLORS.white} mb={'2rem'} key={i} rounded="sm" width="100%">
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton justifyContent="space-between">
                          <Text
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={LANDING_SUB_HEADER_FONT}
                            py="1rem"
                            maxW="40rem"
                            fontWeight="semibold"
                          >
                            {data?.question}
                          </Text>
                          {isExpanded ? (
                            <AiFillMinusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.twitterBlue} />
                          ) : (
                            <AiFillPlusSquare size={BUTTON_ICON_SIZE + 5} color={COLORS.blue} />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={LANDING_PARAGRAPH_FONT}
                        pb={4}
                        color={COLORS.formGrey}
                        fontWeight="normal"
                      >
                        {data?.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Box>
          </Flex>
        </Accordion>
      </Box>
    );
  };
  
  export default FaqSection;
  