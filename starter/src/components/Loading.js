import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Spinner} from "reactstrap";

const Loading = ({isLoading}) => {
  return (
    <Modal isOpen={isLoading} className='modal-dialog-centered custom-spinner-modal'>
      <div className='w-100 h-100 p-0 m-0'>
        <center>
          <Spinner color='primary'/>
        </center>
      </div>
    </Modal>
  );
}
export default Loading