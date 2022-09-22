import { Channel, ConsumeMessage } from 'amqplib';
import getConnection from './connection';

const consumer = (channel: Channel) => (msg: ConsumeMessage | null): void => {
  if (msg) {
    console.log(msg.content.toString());
    channel.ack(msg);
  }
};

const readMessage = async (queueName: string) => {
  const channel = await getConnection();

  await channel.assertQueue(queueName, { durable: true });

  await channel.prefetch(1);
  await channel.consume(queueName, consumer(channel));

  await channel.close();
};

export default readMessage;
