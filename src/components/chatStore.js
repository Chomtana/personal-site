import { writable } from 'svelte/store';

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const DEFAULT_MESSAGE = [
  {
    type: "text",
    message: `Hello! let type your questions or copy question tet from "Questions" section to try me.`,
    byMe: false
  }
]

export const messages = writable(DEFAULT_MESSAGE);
export const DIALOGFLOW_SESSION_ID = makeid(32);