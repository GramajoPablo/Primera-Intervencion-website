export const metadata = {
  title: 'Primera Intervencion - Sanity Studio',
  description: 'Admin dashboard for Primera Intervencion blog content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
