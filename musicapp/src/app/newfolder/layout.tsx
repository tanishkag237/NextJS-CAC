export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <>
     <h2>inner nav </h2>
     {children}
    </>
       
     
  );
}
