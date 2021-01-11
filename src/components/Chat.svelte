<script>
  import { messages, DIALOGFLOW_SESSION_ID } from './chatStore.js';
  import axios from 'axios';

  let messagesValue;

  const unsubscribe = messages.subscribe(value => {
    messagesValue = value;
  })

  const CHATBOT_HOST = "https://chatbot.chom.dev"

  let inputMessage = "";

  async function scrollChatToBottom() {
    document.querySelectorAll(".chat-message-scrollpane").forEach(ele => ele.scroll(0, 10000))
  }

  async function sendMessage() {
    try {
      messages.update(c => [...c, {
        type: "text",
        message: inputMessage,
        byMe: true,
      }])

      setTimeout(()=>scrollChatToBottom(), 250);

      let response = await axios.post(CHATBOT_HOST, {
        sessionId: DIALOGFLOW_SESSION_ID,
        type: "text",
        message: inputMessage
      })

      let queryResult = response.data.queryResult;
      console.log(queryResult);

      let message = queryResult.fulfillmentText || "Sorry, I don't understand. I will improve myself in the future."

      messages.update(c => [...c, {
        type: "text",
        message: message,
        byMe: false,
      }])

      setTimeout(()=>scrollChatToBottom(), 250);
    } catch (err) {
      console.log(err);
    }
  }
</script>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;

    height: 100%;
    max-height: 100%;
  }

  .chat-input-container {
    flex-basis: 30px;
    flex-grow: 0;
    flex-shrink: 0;

    display: flex;
  }

  .chat-input {
    flex-grow: 1;
  }

  .chat-send-button-container {
    flex-basis: 50px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .chat-message-container {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    overflow-y: auto;
  }

  .chat-message-scrollpane {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .message-container {
    display: flex;
    margin-bottom: 8px;
    padding: 8px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 16px;
    font-size: 14px;
    max-width: 75%;
  }

  .message-container-left {
    align-self: flex-start;
    background-color: white;
    color: var(--primary-darker);
  }

  .message-container-right {
    align-self: flex-end;
    background-color: var(--primary-darker);
    color: white;
  }
</style>

<div class="chat-container">
  <div class="chat-message-container">
    <div class="chat-message-scrollpane">
      {#each messagesValue as message}
        <div class={`message-container ${message.byMe ? 'message-container-right' : 'message-container-left'}`}>
          {message.message}
        </div>
      {/each}
    </div>
  </div>

  <form class="chat-input-container" on:submit|preventDefault={() => sendMessage()}>
    <input class="chat-input form-control" bind:value={inputMessage} placeholder="Type your question...">
    <div class="chat-send-button-container">
      <button class="btn btn-primary">Send</button>
    </div>
  </form>
</div>