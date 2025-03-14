
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-natural-50">
      <div className="text-center p-6 max-w-md">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
          404 Error
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-primary">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Button asChild size="lg" className="button-scale rounded-full">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
