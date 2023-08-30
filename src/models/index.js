// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dog, User, Message, ChatRoom, UserChatRoom } = initSchema(schema);

export {
  Dog,
  User,
  Message,
  ChatRoom,
  UserChatRoom
};