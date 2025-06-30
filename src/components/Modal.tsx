import { useRef, useState, type ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
  show?: boolean;
}

export default function Modal(props: Props) {
  const { children, className, show } = props;

  const [isOpen, setIsOpen] = useState(show || false);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const classes = twMerge(
    'relative fixed top-1/2 left-1/2 -translate-1/2 bg-white rounded-lg p-6 shadow-lg',
    className
  );

  const close = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };
  const open = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  if (show) {
    open();
  } else {
    close();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          ref={dialogRef}
          className={classes}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
            onClick={close}
            aria-label="Close Modal"
          >
            <FaTimes className="text-xl" />
          </button>
          {children}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
}
