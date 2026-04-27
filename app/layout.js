import "./globals.css";
import Providers from "./providers.js";

export const metadata = {
  title: "JumboTiger",
  description: "A frontend-only Next.js experience for Jumbo Tiger."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>

      <body className="antialiased" suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}