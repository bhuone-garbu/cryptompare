interface Props {
  children: React.ReactNode;
  closeHandler: () => void;
}

const Modal: React.FC<Props> = ({ closeHandler, children }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-6 pb-10 text-center">
        <div
          className="fixed inset-0 transition-opacity max-h-full overflow-y-auto"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>

        <div
          className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-lg w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-y-scroll">{children}</div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={closeHandler}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-700 hover:bg-indigo-900 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
