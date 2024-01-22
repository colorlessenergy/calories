import './globals.css';

export const metadata = {
    title: 'calories',
    description: 'calories'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
