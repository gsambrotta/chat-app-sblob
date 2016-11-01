import contacts from './contacts';
const mySelf = 'me';

const conversations = [
  {
    id: 1,
    participants: [contacts[2], mySelf],
    conversations: [
      {
        sender: mySelf,
        messages: [
          {
            body: 'Where are you?',
            date: '19/03/2016 20:17'
          },
          {
            body: 'see you later',
            date: '09/04/2016 08:45'
          }
        ]
      },
      {
        sender: contacts[2],
        messages: [
          {
            body: 'Where are you?',
            date: '19/03/2016 20:17'
          },
          {
            body: 'see you later',
            date: '09/04/2016 08:45'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    participants: [contacts[1], mySelf],
    conversations: [
      {
        sender: contacts[1],
        messages: [
          {
            body: 'Join us tonight?',
            date: '19/03/2016 20:17'
          }
        ]
      },
      {
        sender: mySelf,
        messages: [
          {
            body: 'Nope. Got a date, whish me luck!',
            date: '19/03/2016 20:17'
          }
        ]
      }
    ]
  }
];

export default conversations;
