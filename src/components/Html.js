import React from "react";

class Html extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        </body>
      </html>
    );
  }
}

export default Html;
