import conversations from './data/conversations';

export function getConversations() {
  return conversations;
}

export function getConversation(conversationId) {
  return conversations[conversationId];
}

export function saveMessageIntoConversation() {
	// add message to the right conversation (convId)
	// together with the sende or the message.
	// {sender: sender, messages: message}
	// message ==> messages.push({ body: body, date: date} - 1)
}
