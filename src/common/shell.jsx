import React from 'react';
import PropTypes from 'prop-types';

function Shell({ title, pageElement, clientUrl }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body>
        <div id="content">{pageElement}</div>
        <script src={clientUrl} />
      </body>
    </html>
  );
}

Shell.propTypes = {
  title: PropTypes.string.isRequired,
  pageElement: PropTypes.element.isRequired,
  clientUrl: PropTypes.string.isRequired,
};

export default Shell;
