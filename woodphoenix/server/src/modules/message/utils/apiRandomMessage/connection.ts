import axios from 'axios';

export async function randomMessage() {
  try {
    const { data } = await axios.get('https://api.adviceslip.com/advice');
    return data.slip.advice;
  } catch (error) {
    return 'message error';
  }
}
