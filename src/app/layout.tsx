import "@/components/styles/globals.css";

export const metadata = {
  title: "Payme",
  description:
    "Nền tảng thanh toán hiệu quả số 1 Việt Nam cho SHOP bán hàng Online, Facebook, Livestream, Tiktok, Shopify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://site-assets.fontawesome.com/releases/v6.1.2/css/all.css?fbclid=IwAR2Lefv1ZTLJsKEsnl4HGMf5XRZuPqx5yOFnFaOFbVgCiCeU87S0up6ptKU'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
