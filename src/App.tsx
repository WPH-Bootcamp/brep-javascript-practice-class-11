import RadixDialogDemo from './components/RadixDialogDemo';
import RadixDropdownDemo from './components/RadixDropdownDemo';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ShadcnDemo from './components/ShadCNDemo';
import StatusBadge from './components/StatusBadge';

function App() {
  return (
    <div className="h-[200dvh]">
      <h1 className="bg-amber-500 text-white py-8 text-center">
        Class 11 - Tailwind CSS, Radix UI, and ShadCn
      </h1>

      <h2>Materi 2 - Radix UI</h2>
      <div className="flex flex-col justify-center items-center gap-5">
        <RadixDialogDemo />
        <RadixDropdownDemo />
      </div>

      <h2>Materi 3 - ShadCN</h2>
      <Button>Save</Button>
      <Input placeholder="Your name" />
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>

          <CardDescription>Update your profile.</CardDescription>
        </CardHeader>

        <CardContent>Content</CardContent>
      </Card>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Button
        className="
          bg-green-600
          hover:bg-green-700
        "
      >
        Mark Complete
      </Button>
      <ShadcnDemo />
      <StatusBadge isActive={true} className="px-10 m-5" />
    </div>
  );
}

export default App;
