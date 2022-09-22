import client, { Connection, Channel } from 'amqplib';

const getConnection = async (): Promise<Channel> => {
  const {
    QUEUE_USER,
    QUEUE_PASSWORD,
    QUEUE_URL,
    QUEUE_PORT,
  } = process.env;

  const connection: Connection = await client.connect(
    `amqp://${QUEUE_USER}:${QUEUE_PASSWORD}@${QUEUE_URL}:${QUEUE_PORT}`,
  );

  const channel: Channel = await connection.createChannel();

  return channel;
};

export default getConnection;
