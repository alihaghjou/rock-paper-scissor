import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CloseIcon from "../assets/images/icon-close.svg";
import Rules from "../assets/images/image-rules.svg";

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className="outline outline-[#606e85] float-right rounded p-2 px-4 md:mr-20"
        onClick={openModal}
      >
        RULES
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="md:max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all md:w-full md:h-full w-screen h-screen">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-900 flex justify-between items-center"
                  >
                    <span>RULES</span>
                    <div>
                      <button type="button" onClick={closeModal}>
                        <img src={CloseIcon} />
                      </button>
                    </div>
                  </Dialog.Title>
                  <div className="md:mt-10 flex justify-center items-center h-full">
                    <center>
                      <img src={Rules} className="w-96" />
                    </center>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
