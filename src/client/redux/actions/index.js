import Swal from 'sweetalert2'
import axios from 'axios'
const headers = { 'Content-Type': 'application/json' }

export const submitForm = (form) => async dispatch => {
  return await axios.post('http://api.demo.com/users', form, headers)
  .then(() => Swal.fire('Success', 'Inserted', 'success'))
  .catch(() => Swal.fire('Error', 'Api Error', 'error'))
}