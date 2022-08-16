import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { faker } from '@faker-js/faker';
import { images } from '../data';

export default function img() {
  return (
    <Fragment>
      <Head>
        <title>Next Js Image Component</title>
      </Head>
      <div className="container text-center mt-4">
        <h1 className="display-4">&lt;Image/&gt; Component 👋</h1>
        <hr />
        <hr />

        <div className=" mx-auto">
          <div className="row">
            {images.map((url) => {
              return (
                <div className="mt-3 p-2 col-4" key={url}>
                  <div className="card">
                    <Image
                      src={url}
                      alt={url}
                      height={50}
                      width={50}
                      layout={'responsive'}
                      placeholder="blur"
                      blurDataURL={`/_next/image?url=${images[0]}&w=200&q=1`}
                    />
                    <div className="card-body">
                      <p className="card-text" suppressHydrationWarning>
                        {faker.lorem.words(15)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
