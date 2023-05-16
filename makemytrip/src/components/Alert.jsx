import React from 'react'
import { Alert,AlertIcon,AlertDescription,AlertTitle, Img } from '@chakra-ui/react';

const Alert1 = () => {
  return (
      <div>
          <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="600px">
              <img src="https://i.gifer.com/7efs.gif" alt="" />
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                  Booking successfully
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                  Thanks for Visiting Trip Mate.
              </AlertDescription>
          </Alert>
      </div>
  );
}

export default Alert1