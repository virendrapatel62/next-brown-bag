/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import lodash from 'lodash';
import { Children, Fragment, useEffect, useState } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Image Component</title>
      </Head>
      <div className="container text-center mt-4">
        <h1 className="display-1">👋</h1>

        <hr />
        <hr />

        <div>
          <Button href="/html-img">HTML img Tag</Button>
        </div>
        <div className="mt-3">
          <Button href="/next-Image">Next Js Image Component</Button>
        </div>
      </div>
    </Fragment>
  );
}

function Button({ children, href }) {
  const buttonStyle = {
    backgroundColor: '#02324E',
    color: 'white',
  };

  return (
    <Link href={href}>
      <button style={buttonStyle} className="btn">
        {children}
      </button>
    </Link>
  );
}
