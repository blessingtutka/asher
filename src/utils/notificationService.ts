import { toast, ToastOptions, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Notify {
    success: (message: string, options?: ToastOptions) => void;
    error: (message: string, options?: ToastOptions) => void;
    warning: (message: string, options?: ToastOptions) => void;
    info: (message: string, options?: ToastOptions) => void;
}

const defaultOptions: ToastOptions = {
    autoClose: 5000,
    draggable: false,
    position: 'top-right' as ToastPosition,
};

const notify: Notify = {
    success: (message, options = defaultOptions) => toast.success(message, options),
    error: (message, options = defaultOptions) => toast.error(message, options),
    warning: (message, options = defaultOptions) => toast.warn(message, options),
    info: (message, options = defaultOptions) => toast.info(message, options),
};

export default notify;
