import { env } from "process";

export default async function Test() {
  const data = await fetch(`${env.SUB_API_URL}/events`);
  const posts = await data.json();
  return posts.active.map((post) => (
    <ul key={post.slot.id}>
      <li>맵 종류: {post.slot.name}</li>
      <li>맵 이름: {post.map.name}</li>
      <br />
    </ul>
  ));
}

// slot: {
//     id: 15,
//     name: 'Slot #15',
//     emoji: '🗺️' ,
//     hash: 'Slot-15',
//     listAlone: false,
//     hideable: false,
//     hideForSlot: null,
//     background: null
//   },
//   predicted: false,
//   startTime: '2024-09-24T02:00:00.000Z',
//   endTime: '2024-09-25T02:00:00.000Z',
//   reward: 0,
//   map: {
//     id: 15000460,
//     new: false,
//     disabled: false,
//     name: 'No Surrender',
//     hash: 'No-Surrender',
//     version: 1,
//     link: 'https://brawlify.com/maps/detail/No-Surrender',
//     imageUrl: 'https://cdn.brawlify.com/maps/regular/15000460.png',
//     credit: null,
//     environment: [Object],
//     gameMode: [Object],
//     lastActive: 1727229600,
//     dataUpdated: 1727229600,
//     stats: [Array],
//     teamStats: []
//   },
//   modifier: null
