import React from 'react';
import styles from './Blah.module.css';

function Home(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <br></br>
          <img src="./joel.jpg" alt="companyLogo" />
        </div>

        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
