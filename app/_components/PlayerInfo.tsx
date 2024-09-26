import { usePlayerContext } from "@/context/context";

export default function PlayerInfo() {
  const { playerData } = usePlayerContext();
  console.log(playerData);
  return (
    <section className="w-full mt-[30px]">
      <div className="w-[90%] h-[500px] m-auto">
        <table>
          <tbody>
            <tr>
              <td>{playerData.tag}</td>
              <td>{playerData.name}</td>
              <td>{playerData.trophies}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
