'use client'

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import Toast, { ToastProps, ToastContainer } from './toast';

interface ToastContextProps {
  showToast: (props: Omit<ToastProps, 'onClose'>) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<(ToastProps & { id: number })[]>([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);
  
  const showToast = useCallback((props: Omit<ToastProps, 'onClose'>) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { ...props, id, onClose: () => removeToast(id) }]);
  }, [removeToast]);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {mounted && (
        <ToastContainer>
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </ToastContainer>
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
