import { cn } from '@/lib/utils';

type StatusBadgeProps = {
  isActive: boolean;
  className?: string;
};

function StatusBadge({ isActive, className }: StatusBadgeProps) {
  return (
    <button
      disabled={isActive ? false : true}
      className={cn(
        'rounded-full px-3 py-1 text-sm select-none',
        isActive && 'bg-green-100 text-green-700 cursor-pointer ',
        !isActive && 'bg-gray-100 text-gray-500 disabled:cursor-not-allowed',
        className
      )}
    >
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
}

export default StatusBadge;
