import contacts from './contacts';
const mySelf = contacts[0];

const conversations = [
  {
    id: 0,
    participants: [contacts[2], mySelf, contacts[3]],
    chat: [
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
            body: 'Beautiful song!',
            date: '19/03/2016 20:17'
          },
          {
            body: 'Anybody online?',
            date: '09/04/2016 08:45'
          }
        ]
      },
      {
        sender: contacts[3],
        messages: [
          {
            body: 'Lalalala',
            date: '19/03/2016 20:17'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    participants: [contacts[1], mySelf],
    chat: [
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
