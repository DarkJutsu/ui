export const metadata = {
    tile: 'Next.js',
    description: 'Next.js'
}
export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}