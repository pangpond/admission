import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
      />
      <link
        rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900"
      />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:400,700" />
      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>
    <style jsx global>
      {`
        body {
          background: #f1f1f1;
        }
      `}
    </style>
    Hello
  </div>
)