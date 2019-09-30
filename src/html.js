import React from 'react';

import favicon from './favicon.ico';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
<script
  dangerouslySetInnerHTML={{
    __html: `
                      var _paq = window._paq || [];
                      _paq.push(['trackPageView']);
                      _paq.push(['enableLinkTracking']);
                      (function() {
                        var u="//cuthrell.com/links/";
                        _paq.push(['setTrackerUrl', u+'js/']);
                        _paq.push(['setSiteId', '2']);
                        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'js/'; s.parentNode.insertBefore(g,s);
                       })();

        `,
  }}
/>
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
