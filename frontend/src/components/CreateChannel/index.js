import { useDispatch } from "react-redux";
import { createTextChannel } from "../../store/textChannels";
import { useState } from "react";
import "../EditServer/EditServer.css";

const CreateChannel = ({ server }) => {
  const dispatch = useDispatch();
  const [channelTopic, setChannelTopic] = useState(null);
  const handleForm = (e) => {
    dispatch(
      createTextChannel({
        server_id: server.id,
        server_owner_id: server.owner_id,
        topic: channelTopic,
      })
    )
  };

  return (
    <div className="edit-server-form">
      <h1 id="mainheader--editform"> Create Channel </h1>
      <br />
      <form id="edit-submit-server" onSubmit={handleForm}>
        <label>
          CHANNEL NAME
          <br />
          <input
            type="text"
            value={channelTopic}
            onChange={(e) => setChannelTopic(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Create Channel</button>
      </form>
    </div>
  );
};

export default CreateChannel;