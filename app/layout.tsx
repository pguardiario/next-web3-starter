import '../styles/global.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <Providers>
        <div className="flex justify-end p-2">
          <ConnectButton />
        </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
