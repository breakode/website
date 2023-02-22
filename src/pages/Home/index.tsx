import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Main from '../../layouts/Main';
import breakodeAnim from '../../assets/breakode.json';

const Soon: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
      if (preloader) preloader.style.display = 'none';
    }, 2000);
  }, []);

  useEffect(() => {
    const countDown = new Date('Mar 15, 2023 00:00:00').getTime();
    const countdownfunction = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTime(`${days}d ${hours}h ${minutes}m ${seconds}s `);
      if (distance < 0) {
        clearInterval(countdownfunction);
        setTime('EXPIRED');
      }
    }, 1000);
  }, []);

  return (
    <Main title="Breakode ID">
      <div className="bk-coming-soon">
        <div className="bk-content">
          <div className="bk-logo">
            <Lottie animationData={breakodeAnim} loop />
          </div>
          <h1>COMING SOON</h1>
          <h1 id="bk-countdown-timer">{time || '24d 24h 60m 60s'}</h1>
          <p>breakode.id is under development now</p>
        </div>
      </div>
    </Main>
  );
};

export default Soon;
