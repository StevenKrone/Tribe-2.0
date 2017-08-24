import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const persons = [
      { id: 0,  name: 'Hero Zero' },
      { id: 1,  name: 'Steven' },
      { id: 2,  name: 'Kendra' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const tribes = [
      { id: 0,  name: 'Tribes' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const messages = [
            
      {
          id: 1,
          receiver: "Steven",
          sender: "Kendra",
          content: "I'm just laying in bed...",
          timestamp: "THU 6:19PM",
      },
      {
          id: 2,
          receiver: "Steven",
          sender: "Kendra",
          content: "Ugh. I'm so tired at work",
          timestamp: "THU 6:19PM",
      },
      {
          id: 3,
          receiver: "Kendra",
          sender: "Steven",
          content: "They are talking about that",
          timestamp: "MON 9:52AM",
      },
      {
          id: 4,
          receiver: "Kendra",
          sender: "Steven",
          content: "Lolol",
          timestamp: "MON 9:52AM",
      },
      {
          id: 5,
          receiver: "Steven",
          sender: "Kendra",
          content: "I'm just laying in bed...",
          timestamp: "MON 9:52AM",
      },
      {
          id: 6,
          receiver: "Steven",
          sender: "Kendra",
          content: "She's such a silly person!",
          timestamp: "THU 6:19PM",
      },
      {
          id: 7,
          receiver: "Kendra",
          sender: "Steven",
          content: "This sticker is a visual image which perfectly represents the depths of my eternal soul. The color... The facial expression... Timeless.",
          timestamp: "THU 6:19PM",
      },
      {
          id: 8,
          receiver: "Steven",
          sender: "Kendra",
          content: "😘❤️",
          timestamp: "THU 6:19PM",
      }

    ];

    return {persons , tribes, messages};

  }
}