import "../styles/globals.css";


import { NavBar } from "../Components/index";
import { ChatAppProvider } from "../Context/ChatAppContext";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <ChatAppProvider>
      <NavBar />
      <Component {...pageProps} />
    </ChatAppProvider>
  </div>
);

export default MyApp;
