export default function FailedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Payment Failed ❌</h1>
      <p className="mt-4 text-muted-foreground">
        Something went wrong. Please try again.
      </p>
    </div>
  );
}