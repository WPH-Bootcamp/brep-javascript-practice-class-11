import { Dialog } from 'radix-ui';

function RadixDialogDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-lg bg-blue-500 text-white px-4 py-2">
          Edit Profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed
            inset-0
            bg-black/50
          "
        />

        <Dialog.Content
          className="
            fixed
            left-1/2
            top-1/2
            w-96
            -translate-x-1/2
            -translate-y-1/2
            rounded-xl
            bg-white
            p-6
            shadow-xl
          "
        >
          <Dialog.Title
            className="
              text-xl
              font-semibold
            "
          >
            Edit Profile
          </Dialog.Title>

          <Dialog.Description
            className="
              mt-2
              text-sm
              text-slate-500
            "
          >
            Update your profile information.
          </Dialog.Description>

          <Dialog.Close asChild>
            <button
              className="
                mt-6
                rounded-lg
                bg-slate-900
                px-4
                py-2
                text-white
              "
            >
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default RadixDialogDemo;
