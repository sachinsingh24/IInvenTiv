import "./Messages.css";

const Messages = () => {
  return (
    <section className="message-section">
      <div className="anchor" id="MoE"></div>
      <div className="Minister container">
        <h2>Message from the Hon. Minister</h2>
        <img src={require("../../images/message/Message MoE.jpg")} alt="" width="70%" />
      </div>
      <div className="anchor" id="Chairman"></div>
      <div className="Chairman container">
        <h2>Message from the Chairman</h2>
        <img src={require("../../images/message/Message BoG Chair.jpg")} alt="" width="70%" />
      </div>
{/*       <div className="anchor" id="Chief"></div>
      <div className="Chief container">
        <h2>Message from the Chief Guest</h2>
        <img src={require("../../images/message/message_3.png")} alt="" width="70%" />
      </div>
      <div className="anchor" id="Director"></div>
      <div className="Director container">
        <h2>Message from the Director</h2>
        <img src={require("../../images/message/message_4.png")} alt="" width="70%" />
      </div> */}
    </section>
  );
};

export default Messages;
