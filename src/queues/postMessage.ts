import { Message } from '../interfaces/Message';
import getConnection from './connection';

const postMessage = async (queueName: string, message: Message) => {
  const channel = await getConnection();

  await channel.assertQueue(queueName);

  await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));

  await channel.close();
};

export default postMessage;
