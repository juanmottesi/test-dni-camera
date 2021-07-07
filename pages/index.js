import React, { useRef, useState } from 'react';
import { Camera as CameraPro } from 'react-camera-pro';

import styles from '../styles/Home.module.css'

const Home = () => {
  const cameraRef = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);

  const setAmountOfCameras = (number) => {
    setNumberOfCameras(number);
  };

  const handleClick = () => console.log('take photo');

  const handleSwitch = () => cameraRef.current.switchCamera();

  return (
    <div className={styles.container}>
      <CameraPro
        ref={cameraRef}
        facingMode="environment"
        numberOfCamerasCallback={setAmountOfCameras}
        errorMessages={{
          noCameraAccessible: 'No se pudo encontrar la camara. Por favor intentar con otro navegador.',
          permissionDenied: 'Pemisos denegados. Por favor recargue la pagina y permita el acceso a la camara.',
          switchCamera: 'No se puede cambiar de camara, el dispositivo solo cuenta con una camara.',
          canvas: 'Navegador no soportado.',
        }}
      />
      <div className={styles.dni} />
      <button type="button" className={styles.takePhoto} onClick={handleClick} aria-label="Sacar foto" />
      {!(numberOfCameras <= 2) && (
        <button type="button" className={styles.switchCamera} onClick={handleSwitch}>
          <span className="icon-swap-camera" />
        </button>
      )}
    </div>
  );
};

export default Home;