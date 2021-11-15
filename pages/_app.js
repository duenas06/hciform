import { ChakraProvider } from "@chakra-ui/react";
import { UserDataContextProvider } from "../src/Context/UserDataContext";
import { ClientProvider } from "../src/Context/ClientContext"
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ClientProvider>
        <UserDataContextProvider>
          <Component {...pageProps} />
        </UserDataContextProvider>
      </ClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
