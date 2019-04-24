import axiosClient from '../components/axiosServer'

export default {
  async slowRequest() {
    try {
      const { data } = await axiosClient.get('/slowRequest')
      // console.log(data);
    } catch (err) {
      console.log('slowRequest ERROR', err)
    }
  }
}

