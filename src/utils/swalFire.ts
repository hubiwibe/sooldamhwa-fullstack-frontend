import Swal from 'sweetalert2';

type SwalFire = {
  error: Function;
};

const swalFire: SwalFire = {
  error: (text: string) => {
    Swal.fire({ icon: 'error', title: 'Error!', text });
  },
};

export default swalFire;
