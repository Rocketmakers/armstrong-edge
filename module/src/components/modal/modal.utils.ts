import { IModalProps } from './modal.component';

export namespace ModalUtils {
  export const closeModal = async ({
    disableClose,
    onClose,
    onOpenChange,
  }: Pick<IModalProps, 'disableClose' | 'onClose' | 'onOpenChange'>) => {
    if (!disableClose) {
      const shouldClose = await onClose?.();

      if (typeof shouldClose === 'boolean' && shouldClose === false) {
        return;
      }

      onOpenChange?.(false);
    }
  };
}
