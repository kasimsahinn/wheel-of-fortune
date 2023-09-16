// pages/index.tsx

import { useState, ChangeEvent } from 'react';
import styles from "./index.module.scss"

export default function Home() {
  const [inputName, setInputName] = useState<string>('');
  const [names, setNames] = useState<string[]>([]);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const addName = () => {
    if (inputName.trim() !== '') {
      setNames([...names, inputName.trim()]);
      setInputName('');
    }
  };

  const spin = () => {
    if (names.length > 0 && names.length >= 2) {
      // İsimler arasında 2. ismi seç
      setWinnerIndex(1); // 0'dan başlayan indekslerle (ilk isim 0, ikinci isim 1, vb.)
    }
  };
  return (
    <div className={styles.section}>

    <div className={styles.main}>
      <h1 className={styles.title}>Şans Çarkı</h1>
      <div className={styles.input_bar}>
        <input
          type="text"
          placeholder="İsim girin..."
          value={inputName}
          onChange={handleInputChange}
        />
        <button onClick={addName}>İsim Ekle</button>
      </div>
      <div>
        <h2>Katılanlar:</h2>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={spin}>Çevir</button>
      </div>
      {winnerIndex !== null && (
        <div>
          <h2>Sonuç:</h2>
          <p>{names[winnerIndex]}</p>
        </div>
      )}
    </div>
    </div>
  );
}
