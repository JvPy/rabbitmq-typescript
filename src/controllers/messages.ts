import { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { Message } from '../interfaces/Message';
import postMessage from '../queues/postMessage';
import readMessage from '../queues/readMessage';

const addMessage = async (req: Request, res: Response) => {
  const { content } = req.body;

  if (content) {
    const message: Message = {
      content,
      id: randomUUID(),
      timestamp: new Date(),
    };

    postMessage('q', message);

    return res.status(201).json();
  }

  return res.status(422).json();
};

const getMessage = async (req: Request, res: Response) => {
  readMessage('q');
  res.status(200).json();
};

export {
  addMessage,
  getMessage,
};
