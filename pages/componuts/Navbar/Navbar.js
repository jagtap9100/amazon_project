import React from 'react'
import { useState } from "react";
import Head from "next/head";
const axios = require('axios');

export default function Navbar() {
  const [state, setstate] = useState('abhi');
  const handleclick = () => {
    axios.get('http://localhost:3000/api/hello')
      .then(function (response) {
        // handle success
        if (response.status == 200) {
          setstate(response.data.name);
        }
      })
  }
  return (
    <>
      <Head>
        <title>Navbar Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://tea.fit/cdn/shop/files/Flipkart-white.png?v=1694755122&width=550" />
      </Head>


      <div className='col-md-12'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Flipkart</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>




    </>
  )
}