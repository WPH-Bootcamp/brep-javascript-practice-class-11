import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';

function ShadcnDemo() {
  return (
    <main
      className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-100
          p-6
        "
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Student Profile</CardTitle>

          <CardDescription>
            Manage your student profile information.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Budi Santoso</p>

              <p
                className="
                    text-sm
                    text-muted-foreground
                  "
              >
                Frontend Student
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button>Edit Profile</Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>

                  <DialogDescription>
                    Update your profile information.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <Input placeholder="Name" />

                  <Input type="email" placeholder="Email" />

                  <Button className="w-full">Save</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default ShadcnDemo;
