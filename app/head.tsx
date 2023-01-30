export default async function Head() {
  return (
    <>
      <title>Freediving Philippines</title>
      <meta
        name="description"
        content="Find your best diving buddy with ease."
      />
      <meta
        property="image"
        content="/assets/images/meta/default-og-image.jpg"
      />
      {/** Open Graph */}
      <meta property="og:title" content="Freediving Philippines"></meta>
      <meta property="og:site_name" content="Freediving Philippines"></meta>
      <meta property="og:url" content="https://www.freediving.ph/" />
      <meta
        property="og:image"
        content="/assets/images/meta/default-og-image.jpg"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Find your best diving buddy with ease."
      />
      {/** End Open Graph */}
      <link rel="icon" href="/assets/images/meta/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </>
  );
}
