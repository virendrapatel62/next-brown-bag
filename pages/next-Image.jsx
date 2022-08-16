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
                      height={500}
                      width={500}
                      layout={'responsive'}
                      placeholder="blur"
                      blurDataURL="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2016/09/progressive-image-loading-pure-css.jpg?fit=542%2C407&ssl=1"
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
