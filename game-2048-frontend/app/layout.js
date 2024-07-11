import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider"
import "./styles/globals.css";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
