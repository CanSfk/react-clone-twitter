import { useModal } from "../store/modal/hooks";
import modals from "../routes/modals";

export default function Modal() {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name == modal.name);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 grid place-items-center bg-[#5b708366] z-30">
      {currentModal && <currentModal.element />}
    </div>
  );
}
