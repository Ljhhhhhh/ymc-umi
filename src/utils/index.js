import {Toast} from 'antd-mobile'

export const errorToast = (vali, field) => {
  let result = true;
  if (field) {
    vali([].concat(field),(err) => {
      if (err) {
        const message = err.mobile.errors[0].message
        Toast.fail(message)
        result = false
      }
    })
  }
  return result;
}