import Swal, {SweetAlertOptions} from 'sweetalert2';

// warning, error, success, info, question

const $toast = {
  fire(attr: object) {
    const mix = {
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      type: 'success'
    } as SweetAlertOptions;
    Swal.fire({...mix, ...attr});
  },
  success(title: string) {
    this.fire({title, type: 'success'});
  },
  error(title: string) {
    this.fire({title, type: 'error', timer: 6000});
  }
};
const $notify = {
  fire(attr: object) {
    const mix = {
      // showConfirmButton: false,
      timer: 3000,
      type: 'success'
    } as SweetAlertOptions;
    Swal.fire({...mix, ...attr});
  },
  success(title: string, text: string) {
    this.fire({title, type: 'success'});
  },
  error(title: string, text: string) {
    this.fire({text, title, type: 'error', timer: 6000});
  }
};
const popup = {
  $toast, $notify
};
export default popup;
