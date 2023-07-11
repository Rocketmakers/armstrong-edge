/**
 * Simple hook allowing global toast messages to be dispatched.
 * WARNING: This hook must be used within either the unified <ArmstrongProvider> or standalone <ToastProvider> to work.
 * @returns A dispatch method for sending a new global toast message
 */
export declare const useToast: () => (newToast: import("./toast.context").IToast) => void;
