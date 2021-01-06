import api from './apiConfig'

export const getProducts = async () => {
  try {
    const response = await api.get('/instruments')
    console.log(response.data);
      return response.data
  } catch (error) {
      throw error
  }
}

export const getProduct = async id => {
  try {
      const response = await api.get(`/instruments/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createProduct = async product => {
  try {
      const response = await api.post('/instruments', product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateProduct = async (id, product) => {
  try {
      const response = await api.put(`/instruments/${id}`, product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteProduct = async id => {
  try {
      const response = await api.delete(`/instruments/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}