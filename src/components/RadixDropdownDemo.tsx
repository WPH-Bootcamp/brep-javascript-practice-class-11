import { DropdownMenu } from 'radix-ui';

function RadixDropdownDemo() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="
          rounded-lg
          bg-blue-600
          px-4
          py-2
          text-white
          outline-none
        "
      >
        Account
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="
            min-w-44
            rounded-lg
            border
            border-slate-200
            bg-white
            p-1
            shadow-lg
          "
        >
          <DropdownMenu.Item
            className="
              cursor-pointer
              rounded-md
              px-3
              py-2
              text-sm
              outline-none
              data-highlighted:bg-slate-100
            "
          >
            Profile Saya
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="
              cursor-pointer
              rounded-md
              px-3
              py-2
              text-sm
              outline-none
              data-highlighted:bg-slate-100
            "
          >
            Settings
          </DropdownMenu.Item>

          <DropdownMenu.Separator
            className="
              my-1
              h-px
              bg-slate-200
            "
          />

          <DropdownMenu.Item
            className="
              cursor-pointer
              rounded-md
              px-3
              py-2
              text-sm
              text-red-600
              outline-none
              data-highlighted:bg-red-50
            "
          >
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default RadixDropdownDemo;
