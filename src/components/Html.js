import React from "react";
import serialize from "serialize-javascript";

class Html extends React.Component {
  render() {
    const { children, styles, app } = this.props;

    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {styles.map(style => (
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />
          ))}
        </head>

        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          <script src="/static/js/client.js" />
          <script src="/static/js/jquery-3.2.1.min.js" />
          <script src="/static/js/bootstrap.min.js" />
          <script src="/static/js/popper.min.js" />
        </body>
      </html>
    );
  }
}

export default Html;
