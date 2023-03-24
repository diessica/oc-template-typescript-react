import React from 'react';
import { useData } from 'oc-template-typescript-react-compiler/utils/useData';
import styles from './styles.css';
import { AdditionalData, ClientProps } from './types';

interface AppProps extends ClientProps {
  getMoreData?: boolean;
}

const App: React.FC<ClientProps> = () => {
  const { firstName, lastName, userId, getData } = useData<AppProps>();
  const [additionalData, setAdditionalData] = React.useState<AdditionalData | null>(null);
  const [error, setError] = React.useState('');

  const fetchMoreData = async () => {
    setError('');
    try {
      const data = await getData({ userId, getMoreData: true });
      setAdditionalData(data);
    } catch (err) {
      setError(String(err));
    }
  };

  if (error) {
    return <div>Something wrong happened!</div>;
  }

  return (
    <div className={styles.container}>
      <h1 style={{ margin: '0 0 20px 0' }}>
        Hello, <span style={{ textDecoration: 'underline' }}>{firstName}</span> {lastName}
      </h1>
      {additionalData && (
        <div className={styles.info}>
          <div className={styles.block}>Age: {additionalData.age}</div>
          <div className={styles.block}>
            Hobbies: {additionalData.hobbies.map((x) => x.toLowerCase()).join(', ')}
          </div>
        </div>
      )}
      <button className={styles.button} onClick={fetchMoreData}>
        Get extra information
      </button>
    </div>
  );
};

export default App;
