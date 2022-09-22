import '../env';
import readMessage from '../queues/readMessage';

const work = async () => {
  while (true) {
    // eslint-disable-next-line no-await-in-loop
    await readMessage('q');
  }
};

work();
