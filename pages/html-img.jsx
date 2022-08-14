/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import React, { Fragment } from 'react';
import { images } from '../data';

export default function img() {
  return (
    <Fragment>
      <Head>
        <title>HTML img</title>
      </Head>
      <div className="container text-center mt-4">
        <h1 className="display-4">&lt;img/&gt; Tag 👋</h1>
        <hr />
        <hr />

        <div className=" mx-auto">
          <div className="row">
            {images.map((url) => {
              return (
                <div className="mt-3 p-2 col-4" key={url}>
                  <img
                    src={url}
                    alt={url}
                    height={500}
                    className="img-fluid rounded"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
